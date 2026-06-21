import Image from "next/image";
import FadeIn from "./FadeIn";
import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <FadeIn>
      <section id="gallery" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Photo Gallery
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Highlights from conferences, keynote talks, workshops,
              research activities, student mentoring, awards,
              collaborations, and academic events.
            </p>

          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {gallery.map((photo) => (
              <div
                key={photo.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Image */}
                <div className="overflow-hidden">

                  <Image
                    src={photo.image}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>

                {/* Caption */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold text-slate-800 text-center group-hover:text-blue-700 transition">
                    {photo.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}