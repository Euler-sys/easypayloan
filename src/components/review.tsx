export default function ClientReviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Phoenix, AZ",
      initials: "SM",
      text:
        "My local bank rejected me twice. FastCashLoan approved my $8,000 application within hours. The money was in my account the following morning.",
    },
    {
      name: "James T.",
      location: "Atlanta, GA",
      initials: "JT",
      text:
        "After a medical emergency wrecked my credit score, FastCashLoan assessed my current income and approved my request with zero interest.",
    },
    {
      name: "Maria R.",
      location: "Los Angeles, CA",
      initials: "MR",
      text:
        "What set FastCashLoan apart was transparency. My specialist walked me through every line of the agreement. No surprises.",
    },
    {
      name: "David K.",
      location: "Chicago, IL",
      initials: "DK",
      text:
        "From submitting the form to receiving funds took under 48 hours. The team was responsive and professional.",
    },
    {
      name: "Amanda L.",
      location: "Dallas, TX",
      initials: "AL",
      text:
        "I didn’t think I’d qualify, but the process was smooth and stress-free. Highly recommend.",
    },
    {
      name: "Robert W.",
      location: "Miami, FL",
      initials: "RW",
      text:
        "Fast approval and zero interest? I was skeptical at first, but they delivered exactly as promised.",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-full mb-4 bg-yellow-400/90 text-black shadow-sm">
          Client Reviews
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          What Our Borrowers Say
        </h3>

        <p className="text-lg text-gray-600 mb-6">
          Over 2,300 verified reviews from real customers across the United States.
        </p>

        <div className="text-2xl font-bold text-green-600 mb-12">
          4.8 out of 5.0 from 2,300+ verified clients
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex flex-col bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* stars */}
              <div className="flex justify-center gap-1 mb-3 text-yellow-400">
                {"★★★★★".split("").map((_s, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 text-base">"{r.text}"</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  {r.initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-gray-500 text-sm">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}