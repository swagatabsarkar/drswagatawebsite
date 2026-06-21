import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Research",
    "Publications",
    "Patents",
    "Books",
    "Funds",
    "Achievements",
    "Awards",
    "Gallery",
    "Contact",
  ];

  const profiles = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.co.in/citations?user=0ltw3xUAAAAJ",
    },
    {
      name: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=56111873300",
    },
    {
      name: "Web of Science",
      url: "https://www.webofscience.com/wos/author/record/ABH-9452-2020",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0002-2237-1879",
    },
    {
      name: "IRINS",
      url: "https://sairam.irins.org/profile/178873",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div>

            <Image
              src="/images/logo.png"
              alt="Dr. Swagata Sarkar"
              width={220}
              height={80}
              className="mb-5 object-contain"
            />

            <h2 className="text-2xl font-bold">
              Dr. Swagata Sarkar
            </h2>

            <p className="mt-5 text-gray-300 leading-7">
              Professor & Head
              <br />
              Department of Artificial Intelligence & Data Science
              <br />
              Sri Sairam Engineering College
            </p>

            <p className="mt-5 text-blue-400">
              www.swagatasarkar.com
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 hover:translate-x-1 inline-block transition"
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Profiles */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Research Profiles
            </h3>

            <ul className="space-y-3">

              {profiles.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    {profile.name}
                  </a>
                </li>
              ))}

            </ul>

            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-4">
                Contact
              </h3>

              <a
                href="mailto:your-email@gmail.com"
                className="block text-gray-300 hover:text-blue-400"
              >
                📧 swagata@ieee.org
              </a>

              <p className="mt-3 text-gray-300">
                📍 Chennai, Tamil Nadu, India
              </p>

              <a
                href="https://in.linkedin.com/in/swagatabsarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-gray-300 hover:text-blue-400"
              >
                💼 LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Dr. Swagata Sarkar. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-full transition"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}