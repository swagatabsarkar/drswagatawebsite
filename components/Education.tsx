import FadeIn from "./FadeIn";

export default function Education() {
  const education = [
    {
      degree: "Postdoctoral Fellow (Deep Learning)",
      institution: "Lincoln University College, Malaysia",
      year: "2025",
    },
    {
      degree: "Ph.D. – Human Emotion Detection",
      institution: "Sathyabama Institute of Science and Technology, Chennai",
      year: "2018",
    },
    {
      degree: "MBA – Total Quality Management",
      institution: "Sikkim Manipal University",
      year: "2013",
    },
    {
      degree: "M.E. – Instrumentation & Control Engineering",
      institution: "Birla Institute of Technology (BIT), Mesra",
      year: "2011",
    },
    {
      degree: "M.Tech. – Mobile Communication & Network Technology",
      institution: "West Bengal University of Technology",
      year: "2009",
    },
    {
      degree: "AMIE (Gold Medal) – Electronics & Communication Engineering",
      institution: "The Institution of Engineers (India)",
      year: "2006",
    },
  ];

  return (
    <FadeIn>
      <section id="education" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Academic Qualifications
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Education
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              A strong academic foundation that has shaped my career in
              teaching, research, innovation, and leadership.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-blue-700 rounded-full"></div>

            <div className="space-y-10">

              {education.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white text-xl shadow-lg">
                    🎓
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-slate-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-slate-100">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-gray-600 text-lg">
                          {item.institution}
                        </p>
                      </div>

                      <span className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold whitespace-nowrap">
                        {item.year}
                      </span>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}