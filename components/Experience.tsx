import FadeIn from "./FadeIn";

export default function Experience() {
  const experience = [
    {
      position: "Professor & Head",
      department: "Department of Artificial Intelligence & Data Science",
      organization: "Sri Sairam Engineering College",
      duration: "2019 – Present",
      description:
        "Leading the Department of Artificial Intelligence & Data Science by driving academic excellence, research, innovation, accreditation activities, industry collaborations, faculty mentoring, and student development.",
    },
    {
      position: "Associate Professor",
      department: "Computer Science & Engineering",
      organization: "Sri Sairam Engineering College",
      duration: "2012 – 2019",
      description:
        "Taught undergraduate and postgraduate courses, supervised research scholars and student projects, developed curriculum, and contributed to departmental growth and accreditation.",
    },
    {
      position: "Associate Professor",
      department: "Computer Science & Engineering",
      organization: "Rajiv Gandhi College of Engineering",
      duration: "2010 – 2012",
      description:
        "Delivered academic courses, guided student projects, participated in research initiatives, and contributed to departmental administration and curriculum enhancement.",
    },
    {
      position: "Software Engineer",
      department: "Industrial Experience",
      organization: "Various Recognized MNCs",
      duration: "2002 – 2010",
      description:
        "Worked on enterprise software development, product implementation, software testing, client support, and industrial automation projects across recognized multinational companies.",
    },
  ];

  return (
    <FadeIn>
      <section id="experience" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Career Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Professional Experience
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Over 25 years of academic leadership, teaching, research,
              innovation, and industrial experience.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-blue-700 rounded-full"></div>

            <div className="space-y-10">

              {experience.map((job, index) => (
                <div key={index} className="relative flex items-start gap-6">

                  {/* Timeline Icon */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white text-xl shadow-lg">
                    💼
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

                      <div>

                        <h3 className="text-2xl font-bold text-slate-800">
                          {job.position}
                        </h3>

                        <p className="text-blue-700 font-semibold mt-2">
                          {job.department}
                        </p>

                        <p className="text-gray-600 mt-1 text-lg">
                          {job.organization}
                        </p>

                      </div>

                      <span className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold whitespace-nowrap">
                        {job.duration}
                      </span>

                    </div>

                    <p className="mt-6 text-gray-700 leading-8">
                      {job.description}
                    </p>

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