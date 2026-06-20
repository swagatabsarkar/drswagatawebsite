export default function Stats() {
  const stats = [
    {
      number: "25+",
      title: "Years Experience",
    },
    {
      number: "200+",
      title: "Research Publications",
    },
    {
      number: "15+",
      title: "Funded Projects",
    },
    {
      number: "25+",
      title: "Awards & Honors",
    },
  ];

  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition duration-300"
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}