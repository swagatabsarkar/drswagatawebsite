import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Professional Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-slate-50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {achievement.icon}
              </div>

              <h3 className="text-2xl font-semibold text-slate-800">
                {achievement.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}