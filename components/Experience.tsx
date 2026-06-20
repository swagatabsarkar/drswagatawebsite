export default function Experience() {
  const experience = [
    {
      position: "Professor & Head, Department of Artificial Intelligence and Data Science",
      organization: "Sri Sairam Engineering College",
      duration: "2019-Present",
    },
    {
      position: "Associate Professor",
      organization: "Sri Sairam Engineering College",
      duration: "2012-2019",
    },
    {
      position: "Associate Professor",
      organization: "Rajiv Gandhi College of Engineering",
      duration: "2010-2012",
    },
    {
      position: "Industrial Experience",
      organization: "Various Recognised MNCs",
      duration: "2002-2010",
    },
  ];

  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold">
                {job.position}
              </h3>

              <p className="text-lg text-gray-600 mt-2">
                {job.organization}
              </p>

              <span className="inline-block mt-4 bg-blue-700 text-white px-4 py-2 rounded-full">
                {job.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}