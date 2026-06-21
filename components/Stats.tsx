"use client";

import CountUp from "react-countup";
import FadeIn from "./FadeIn";

export default function Stats() {
  const stats = [
    {
      number: 25,
      suffix: "+",
      title: "Years Experience",
      icon: "🎓",
    },
    {
      number: 200,
      suffix: "+",
      title: "Research Publications",
      icon: "📚",
    },
    {
      number: 15,
      suffix: "+",
      title: "Funded Projects",
      icon: "💰",
    },
    {
      number: 25,
      suffix: "+",
      title: "Awards & Honors",
      icon: "🏆",
    },
  ];

  return (
    <FadeIn>
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-white/10 hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h2>

                <p className="mt-4 text-blue-100 text-lg">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}