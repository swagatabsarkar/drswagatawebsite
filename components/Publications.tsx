import { publications } from "../data/publications";

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Publications & Research Profiles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {publications.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {item.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>

              <p className="mt-6 text-blue-600 font-semibold">
                Visit Profile →
              </p>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}