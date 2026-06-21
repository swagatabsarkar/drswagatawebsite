import FadeIn from "./FadeIn";
import { patents } from "../data/patents";

export default function Patents() {
  return (
    <FadeIn>
      <section id="patents" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Innovation & Intellectual Property
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Patents
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Patents showcasing innovation, research excellence and
              technology development across Artificial Intelligence,
              Healthcare, Robotics and Engineering.
            </p>

          </div>

          {/* Patent Cards */}
          <div className="space-y-8">

            {patents.map((patent) => (

              <div
                key={patent.id}
                className="bg-slate-50 rounded-3xl shadow-lg border border-slate-100 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                  {/* Left */}
                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl flex-shrink-0">
                      💡
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-slate-800">
                        {patent.title}
                      </h3>

                      <p className="mt-4 text-gray-600">
                        <strong>Patent Number:</strong> {patent.patentNo}
                      </p>

                    </div>

                  </div>

                  {/* Right */}
                  <div className="flex flex-wrap gap-3 lg:justify-end items-start">

                    <span className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium">
                      {patent.year}
                    </span>

                    <span
                      className={`px-5 py-2 rounded-full font-medium text-white ${
                        patent.status.toLowerCase().includes("granted")
                          ? "bg-green-600"
                          : patent.status.toLowerCase().includes("published")
                          ? "bg-orange-500"
                          : "bg-indigo-600"
                      }`}
                    >
                      {patent.status}
                    </span>

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