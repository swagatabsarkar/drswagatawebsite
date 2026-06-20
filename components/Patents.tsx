import { patents } from "../data/patents";

export default function Patents() {
  return (
    <section id="patents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Patents
        </h2>

        <div className="space-y-6">
          {patents.map((patent) => (
            <div
              key={patent.id}
              className="bg-slate-50 shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-slate-800">
                {patent.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-4">

                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                  Patent No: {patent.patentNo}
                </span>

                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                  {patent.status}
                </span>

                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm">
                  {patent.year}
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}