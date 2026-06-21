import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section
        id="home"
        className="bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-32 pb-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <div className="order-2 lg:order-1 text-center lg:text-left">

              <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Welcome to My Official Website
              </p>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight">
                Dr. Swagata Sarkar
              </h1>

              <h2 className="mt-5 text-2xl md:text-3xl font-bold text-blue-700">
                Professor & Head
              </h2>

              <p className="mt-2 text-lg md:text-xl text-gray-600">
                Department of Artificial Intelligence & Data Science
              </p>

              <p className="mt-8 text-gray-700 leading-8 text-lg">
                Researcher, Educator, Author, Speaker, Mentor and Academic
                Leader with over <strong>25 years of experience</strong> in
                Artificial Intelligence, Machine Learning, Deep Learning,
                Computer Vision, Image Processing, Robotics, Data Science and
                Healthcare AI.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

                <a
                  href="#contact"
                  className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-800 hover:scale-105 transition duration-300"
                >
                  Contact Me
                </a>

                <a
                  href="#publications"
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-300"
                >
                  View Publications
                </a>

              </div>

            </div>

            {/* Right Side */}
            <div className="order-1 lg:order-2 flex justify-center">

              <div className="relative">

                {/* Decorative Background */}
                <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

                <Image
                  src="/images/profile.jpeg"
                  alt="Dr. Swagata Sarkar"
                  width={420}
                  height={520}
                  priority
                  className="relative w-72 sm:w-80 md:w-96 lg:w-[420px] rounded-3xl shadow-2xl border-4 border-white object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}