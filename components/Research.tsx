export default function Research() {
  const researchAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Image Processing",
    "Data Science",
    "Healthcare AI",
    "Internet of Things",
    "Quantum Computing",
    "Cyber Security",
    "Cognitive Computing",
    "Antenna",
  ];

  return (
    <section id="research" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {area}
              </h3>

              <p className="mt-4 text-gray-600">
                Research and development in {area}.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}