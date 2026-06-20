export default function Education() {
  const education = [
    {
      degree: "PDF in Deep Learning",
      institution: "Lincoln University College, Malaysia",
      year: "2025",
    },
    {
      degree: "PhD. in Human Emotion Detection",
      institution: "Sathyabama Institute of Science and Technology,Chennai",
      year: "2018",
    },
    {
      degree: "MBA in Total Quality Management",
      institution: "Sikkim Manipal University, Sikkim",
      year: "2013",
    },
    {
      degree: "M.E. in Instrumentation and Control Engineering",
      institution: "BIT,Mesra",
      year: "2011",
    },
    {
      degree: "M.Tech. in Mobile Communication and Network Technology",
      institution: "WBUT,West Bengal",
      year: "2009",
    },
    {
      degree: "AMIE (GOLD MEDAL) in Electronics and Communication Engineering",
      institution: "IEI,INDIA",
      year: "2006",
    },
  ];

  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-700 pl-6 py-4 shadow rounded-lg"
            >
              <h3 className="text-2xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.institution}
              </p>

              <p className="text-blue-700 font-medium mt-2">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}