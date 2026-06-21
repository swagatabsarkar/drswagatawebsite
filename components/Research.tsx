import FadeIn from "./FadeIn";

const researchAreas = [
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems for automation, reasoning, and data-driven decision-making.",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    description:
      "Designing predictive models using supervised, unsupervised, and reinforcement learning techniques.",
  },
  {
    icon: "🚀",
    title: "Deep Learning",
    description:
      "Building advanced neural network architectures for computer vision and intelligent applications.",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Image understanding, object detection, facial analysis, and visual intelligence systems.",
  },
  {
    icon: "🖼️",
    title: "Image Processing",
    description:
      "Enhancement, segmentation, feature extraction, and pattern recognition in digital images.",
  },
  {
    icon: "📊",
    title: "Data Science",
    description:
      "Data analytics, visualization, statistical modelling, and predictive intelligence.",
  },
  {
    icon: "🏥",
    title: "Healthcare AI",
    description:
      "AI-powered diagnosis, medical image analysis, disease prediction, and smart healthcare.",
  },
  {
    icon: "🌐",
    title: "Internet of Things",
    description:
      "Smart connected devices, Industry 4.0 solutions, and intelligent monitoring systems.",
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    description:
      "Exploring emerging computational paradigms for solving complex optimization problems.",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    description:
      "Secure computing, cyber threat detection, privacy preservation, and intelligent defense systems.",
  },
  {
    icon: "💡",
    title: "Cognitive Computing",
    description:
      "Human-inspired intelligent systems capable of learning, reasoning, and decision support.",
  },
  {
    icon: "📡",
    title: "Antenna Design",
    description:
      "Research on wireless communication systems, RF engineering, and antenna technologies.",
  },
];

export default function Research() {
  return (
    <FadeIn>
      <section id="research" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Research Excellence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Research Interests
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              My research focuses on Artificial Intelligence, Data Science,
              Computer Vision, Healthcare Technologies, Robotics, and other
              emerging areas shaping the future of intelligent systems.
            </p>

          </div>

          {/* Research Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {researchAreas.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 shadow-lg p-8 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7 flex-grow">
                  {item.description}
                </p>

                {/* Badge */}
                <div className="mt-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
                    Research Focus
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}