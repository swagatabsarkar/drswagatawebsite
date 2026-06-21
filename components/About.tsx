import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Side - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/aboutpic.jpg"
                alt="Dr. Swagata Sarkar"
                width={400}
                height={500}
                className="w-72 sm:w-80 md:w-96 rounded-3xl shadow-2xl object-cover"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div>

              <p className="text-blue-700 font-semibold uppercase tracking-wider">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
                Professor, Researcher & Academic Leader
              </h2>

              <p className="mt-8 text-gray-700 leading-8 text-lg">
                Dr. Swagata Sarkar is a Professor and Head of the Department
                of Artificial Intelligence & Data Science at
                Sri Sairam Engineering College, Chennai.
                She has more than two decades of experience in teaching,
                research, academic administration, and innovation.
              </p>

              <p className="mt-6 text-gray-700 leading-8 text-lg">
                Her research interests include Artificial Intelligence,
                Machine Learning, Deep Learning, Computer Vision,
                Image Processing, Robotics, Data Science,
                Healthcare Applications, Sustainable AI, Quantum Computing,
                and Intelligent Systems. She is also an entrepreneur,
                mentor, researcher, author, keynote speaker, and
                academic leader.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                <div className="bg-slate-100 rounded-xl p-5 hover:shadow-lg transition duration-300">
                  <h3 className="font-semibold text-blue-700 text-lg">
                    Experience
                  </h3>
                  <p className="mt-2 text-gray-700">
                    25+ Years in Teaching & Research
                  </p>
                </div>

                <div className="bg-slate-100 rounded-xl p-5 hover:shadow-lg transition duration-300">
                  <h3 className="font-semibold text-blue-700 text-lg">
                    Publications
                  </h3>
                  <p className="mt-2 text-gray-700">
                    200+ Research Papers
                  </p>
                </div>

                <div className="bg-slate-100 rounded-xl p-5 hover:shadow-lg transition duration-300">
                  <h3 className="font-semibold text-blue-700 text-lg">
                    Research Areas
                  </h3>
                  <p className="mt-2 text-gray-700">
                    AI, ML, Computer Vision, Robotics & Data Science
                  </p>
                </div>

                <div className="bg-slate-100 rounded-xl p-5 hover:shadow-lg transition duration-300">
                  <h3 className="font-semibold text-blue-700 text-lg">
                    Leadership
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Professor & Head, Department of AI & DS
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}