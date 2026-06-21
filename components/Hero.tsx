export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-700 text-lg font-semibold mb-3">
            Welcome to the Official Website
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Dr. Swagata Sarkar
          </h1>

          <h2 className="text-2xl font-semibold text-blue-700 mt-4">
            Professor & Head
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            Department of Artificial Intelligence & Data Science
          </p>

          <p className="mt-8 text-gray-700 leading-8">
            Researcher, Educator, Author, Speaker, and Mentor with over two
            decades of experience in Artificial Intelligence, Machine Learning,
            Computer Vision, Image Processing, Robotics, and Data Science.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/images/profile.jpeg"
            alt="Dr. Swagata Sarkar"
            className="w-96 rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}