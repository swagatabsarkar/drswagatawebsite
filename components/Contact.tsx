import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <p><strong>Name:</strong> {contact.name}</p>

            <p className="mt-3">
              <strong>Designation:</strong> {contact.designation}
            </p>

            <p className="mt-3">
              <strong>Department:</strong> {contact.department}
            </p>

            <p className="mt-3">
              <strong>Institution:</strong> {contact.institution}
            </p>

            <p className="mt-3">
              <strong>Address:</strong><br />
              {contact.address}
            </p>

            <p className="mt-3">
              <strong>Email:</strong><br />
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-700 hover:underline"
              >
                {contact.email}
              </a>
            </p>

            <p className="mt-3">
              <strong>Phone:</strong> {contact.phone}
            </p>

          </div>

          {/* Academic Profiles */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Academic Profiles
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  className="text-blue-700 hover:underline"
                >
                  💼 LinkedIn
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}