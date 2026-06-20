import { books } from "../data/books";

export default function Books() {
  return (
    <section id="books" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Books & Book Chapters
        </h2>

        <div className="space-y-6">

          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-slate-800">
                {book.title}
              </h3>

              <p className="mt-2 text-lg text-gray-700">
                <strong>Book:</strong> {book.book}
              </p>

              <p className="text-gray-600">
                <strong>Publisher:</strong> {book.publisher}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                  {book.year}
                </span>

                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm">
                  ISBN: {book.isbn}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}