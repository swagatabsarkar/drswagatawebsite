import Image from "next/image";
import FadeIn from "./FadeIn";
import { publications } from "../data/publications";

export default function Publications() {
  return (
    <FadeIn>
      <section id="publications" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Academic Profiles
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Publications & Research Profiles
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore my scholarly publications, citation metrics, h-index,
              and academic profiles across leading international research
              databases.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {publications.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg p-8 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center text-slate-800 group-hover:text-blue-700 transition">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-center text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md group-hover:bg-blue-800 transition">
                    Visit Profile
                    <span className="text-lg">↗</span>
                  </span>
                </div>
              </a>
            ))}

          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-500 text-sm">
            Click any profile to view publications, citations, h-index,
            and other scholarly metrics.
          </div>

        </div>
      </section>
    </FadeIn>
  );
}