import FadeIn from "./FadeIn";
import { awards } from "../data/awards";

export default function Awards() {
  return (
    <FadeIn>
      <section id="awards" className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Recognition & Excellence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Awards & Honors
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition received for excellence in teaching, research,
              innovation, leadership, mentoring, and professional service
              throughout my academic career.
            </p>

          </div>

          {/* Award Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {awards.map((award) => (
              <div
                key={award.id}
                className="group bg-white rounded-2xl border border-slate-200 shadow-lg p-8 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >

                {/* Trophy Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-100 to-amber-200 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">
                  🏆
                </div>

                {/* Award Title */}
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition">
                  {award.title}
                </h3>

                {/* Organization */}
                <p className="mt-5 text-gray-600 flex items-center gap-2">
                  <span className="text-lg">🏛️</span>
                  <span>{award.organization}</span>
                </p>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Bottom Badges */}
                <div className="mt-8 flex flex-wrap justify-between items-center gap-3">

                  <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {award.category}
                  </span>

                  <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {award.year}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}