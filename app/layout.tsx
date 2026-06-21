import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Swagata Sarkar | Professor | AI Researcher | Official Website",

  description:
    "Official website of Dr. Swagata Sarkar, Professor & Head, Department of Artificial Intelligence & Data Science, Sri Sairam Engineering College. Researcher in Artificial Intelligence, Machine Learning, Computer Vision, Robotics, Healthcare AI and Data Science.",

  keywords: [
    "Dr Swagata Sarkar",
    "Swagata Sarkar",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Professor",
    "AI Research",
    "Computer Vision",
    "Image Processing",
    "Healthcare AI",
    "Robotics",
    "Sri Sairam Engineering College",
    "Data Science",
    "Research Publications",
    "Google Scholar",
    "Scopus",
  ],

  authors: [
    {
      name: "Dr. Swagata Sarkar",
    },
  ],

  creator: "Dr. Swagata Sarkar",

  publisher: "Dr. Swagata Sarkar",

  metadataBase: new URL("https://swagatasarkar.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dr. Swagata Sarkar | Official Website",

    description:
      "Professor, Researcher, Academic Leader in Artificial Intelligence, Machine Learning, Computer Vision, Robotics and Data Science.",

    url: "https://swagatasarkar.com",

    siteName: "Dr. Swagata Sarkar",

    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Swagata Sarkar",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Dr. Swagata Sarkar",

    description:
      "Professor & Head | Artificial Intelligence | Researcher | Academic Leader",

    images: ["/images/profile.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}