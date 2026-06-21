import FadeIn from "./FadeIn";
import { funds } from "../data/funds";

export default function Funds() {
  return (
    <FadeIn>
      <section id="funds" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Sponsored Research
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Research Grants & Funding
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Successfully secured competitive research grants from national
              and international funding agencies to support innovation,
              interdisciplinary research, and societal impact.
            </p>

          </div>

          {/* Funding Cards */}
          <div className="space-y-8">

            {funds.map((fund) => (
              <div
                key={fund.id}
                className="group bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-8 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                  {/* Left */}
                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-200 flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition">
                      💰
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition">
                        {fund.title}
                      </h3>

                      <p className="mt-5 text-gray-700">
                        <span className="font-semibold text-slate-900">
                          Funding Agency:
                        </span>{" "}
                        {fund.agency}
                      </p>

                    </div>

                  </div>

                  {/* Right */}
                  <div className="grid grid-cols-2 gap-4 lg:min-w-[320px]">

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Grant Amount</p>
                      <p className="font-bold text-blue-700 mt-1">
                        {fund.amount}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-bold text-slate-800 mt-1">
                        {fund.duration}
                      </p>
                    </div>

                    <div className="col-span-2">

                      <span
                        className={`inline-block px-5 py-2 rounded-full text-white font-medium ${
                          fund.status.toLowerCase().includes("completed")
                            ? "bg-green-600"
                            : fund.status.toLowerCase().includes("ongoing")
                            ? "bg-blue-700"
                            : "bg-orange-500"
                        }`}
                      >
                        {fund.status}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}