import FadeIn from "./FadeIn";

export default function Biography() {
  return (
    <FadeIn>
      <section id="biography" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Academic Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Biography
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              An academic leader, researcher, innovator, entrepreneur and
              mentor with more than two decades of excellence in education,
              research and technology development.
            </p>
          </div>

          {/* Biography Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <div className="space-y-8 text-lg leading-9 text-gray-700">

              <p>
                Dr. <strong>Swagata Sarkar</strong> secured the
                <strong> All India First Rank</strong> in Electronics and
                Communication Engineering from the Institution of Engineers
                (India). She completed her <strong>Post Doctorate</strong>
                from Lincoln University College, Malaysia, earned her
                <strong> Ph.D.</strong> from Sathyabama Institute of Science
                and Technology, <strong>M.E.</strong> from Birla Institute of
                Technology, Mesra, and <strong>M.Tech.</strong> from JIS
                College of Engineering, West Bengal.
              </p>

              <p>
                She is currently serving as
                <strong> Professor and Head</strong> of the Department of
                Artificial Intelligence & Data Science at
                <strong> Sri Sairam Engineering College, Chennai</strong>.
                Her expertise includes Artificial Intelligence, Machine
                Learning, Signal Processing, Image Processing, Robotics,
                Antenna Design, Wireless Communication, Data Science and
                Product Design & Development.
              </p>

              <p>
                Throughout her distinguished career, she has received
                numerous national and international recognitions including
                <strong> Best Researcher Award</strong>,
                <strong> Leading Educationist of India Award</strong>,
                <strong> NPTEL Star Performer Award</strong>,
                <strong> Best Appraisal Award</strong>,
                <strong> Best Mentor Award (Smart India Hackathon)</strong>,
                and recognition as
                <strong> RMoC & GEM Mentor</strong> by
                <strong> NITI Aayog</strong>.
              </p>

              <p>
                She has successfully secured research funding from
                <strong> IEEE EPICS</strong>,
                <strong> IEEE SIGHT</strong>,
                <strong> DST</strong>,
                <strong> AICTE</strong> and
                <strong> TNSCST</strong>.
                She is a
                <strong> Senior Member of IEEE</strong>,
                <strong> Vice Chair of IEEE CIS</strong>, and
                <strong> Secretary of the IEEE Sensor Council, Madras Section</strong>.
              </p>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏅</div>
                <h3 className="font-bold text-blue-700">
                  All India Rank
                </h3>
                <p className="text-gray-600 mt-2">
                  First Rank in ECE
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-blue-700">
                  Education
                </h3>
                <p className="text-gray-600 mt-2">
                  PDF, PhD, M.E., M.Tech., MBA
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-blue-700">
                  Research
                </h3>
                <p className="text-gray-600 mt-2">
                  AI, ML, Robotics & Healthcare
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-blue-700">
                  Leadership
                </h3>
                <p className="text-gray-600 mt-2">
                  IEEE Senior Member & Academic Leader
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}