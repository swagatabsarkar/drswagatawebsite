import FadeIn from "./FadeIn";
import { contact } from "../data/contact";
import ContactForm from "./ContactForm";

<div className="bg-white rounded-2xl shadow-lg p-8">
  <h3 className="text-2xl font-bold mb-6">
    Send a Message
  </h3>

  <ContactForm />
</div>

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="bg-gradient-to-b from-slate-100 to-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-widest">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Contact
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              Feel free to contact me regarding research collaborations,
              keynote talks, funded projects, academic partnerships,
              consultancy, or student guidance.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="font-semibold text-blue-700">👩‍🏫 Name</p>
                  <p>{contact.name}</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">🎓 Designation</p>
                  <p>{contact.designation}</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">🏢 Department</p>
                  <p>{contact.department}</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">🏛 Institution</p>
                  <p>{contact.institution}</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">📍 Address</p>
                  <p>{contact.address}</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">📧 Email</p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-700 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-blue-700">📞 Phone</p>

                  <a
                    href={`tel:${contact.phone}`}
                    className="text-blue-700 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>

              </div>

            </div>

            {/* Academic Profiles */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Academic & Professional Profiles
              </h3>

              <div className="space-y-4">

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-slate-100 rounded-xl p-5 hover:bg-blue-700 hover:text-white transition"
                >
                  <span>💼 LinkedIn</span>
                  <span>↗</span>
                </a>

                {contact.googleScholar && (
                  <a
                    href={contact.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-100 rounded-xl p-5 hover:bg-blue-700 hover:text-white transition"
                  >
                    <span>📚 Google Scholar</span>
                    <span>↗</span>
                  </a>
                )}

                {contact.orcid && (
                  <a
                    href={contact.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-100 rounded-xl p-5 hover:bg-blue-700 hover:text-white transition"
                  >
                    <span>🆔 ORCID</span>
                    <span>↗</span>
                  </a>
                )}

                {contact.scopus && (
                  <a
                    href={contact.scopus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-100 rounded-xl p-5 hover:bg-blue-700 hover:text-white transition"
                  >
                    <span>📄 Scopus</span>
                    <span>↗</span>
                  </a>
                )}

                {contact.webofscience && (
                  <a
                    href={contact.webofscience}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-100 rounded-xl p-5 hover:bg-blue-700 hover:text-white transition"
                  >
                    <span>🌐 Web of Science</span>
                    <span>↗</span>
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}