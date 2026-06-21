import FadeIn from "./FadeIn";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <FadeIn>
      <section id="achievements" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Academic Excellence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Professional Achievements
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              A journey of academic leadership, research excellence,
              innovation, mentoring, and professional recognition across
              education and industry.
            </p>

          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group bg-slate-50 rounded-2xl border border-slate-200 shadow-lg p-8 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7 flex-grow">
                  {achievement.description}
                </p>

                {/* Badge */}
                <div className="mt-6">
                  <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    Professional Achievement
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