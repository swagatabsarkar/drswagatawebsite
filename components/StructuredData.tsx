export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Swagata Sarkar",
    url: "https://swagatasarkar.com",
    image: "https://swagatasarkar.com/images/profile.jpeg",
    jobTitle: "Professor & Head",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Sri Sairam Engineering College",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Lincoln University College",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Sathyabama Institute of Science and Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Birla Institute of Technology Mesra",
      }
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Science",
      "Image Processing",
      "Robotics",
      "Healthcare AI",
      "Quantum Computing",
      "Cyber Security"
    ],
    sameAs: [
      "https://scholar.google.co.in/citations?user=0ltw3xUAAAAJ",
      "https://www.scopus.com/authid/detail.uri?authorId=56111873300",
      "https://www.webofscience.com/wos/author/record/ABH-9452-2020",
      "https://orcid.org/0000-0002-2237-1879",
      "https://sairam.irins.org/profile/178873"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}