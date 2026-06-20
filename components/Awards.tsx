import { awards } from "../data/awards";

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Awards & Honors
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-800">
                {award.title}
              </h3>

              <p className="mt-3 text-gray-700">
                <strong>Organization:</strong> {award.organization}
              </p>

              <div className="flex justify-between items-center mt-6">

                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                  {award.category}
                </span>

                <span className="text-lg font-semibold text-gray-700">
                  {award.year}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}