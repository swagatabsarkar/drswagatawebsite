export default function Navbar() {
  const menu = [
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

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div>
          <img
  src="/images/logo.png"
  alt="Dr. Swagata Sarkar Logo"
  className="h-20- w-20 squared-full object-cover"
/>
        </div>

        <ul className="hidden lg:flex gap-6">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
                className="hover:text-blue-700 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}