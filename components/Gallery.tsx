import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Photo Gallery
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}