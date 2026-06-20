import { funds } from "../data/funds";

export default function Funds() {
  return (
    <section id="funds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Research Grants & Funding
        </h2>

        <div className="space-y-6">

          {funds.map((fund) => (
            <div
              key={fund.id}
              className="bg-slate-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-slate-800">
                {fund.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mt-5">

                <p>
                  <strong>Funding Agency:</strong><br />
                  {fund.agency}
                </p>

                <p>
                  <strong>Grant Amount:</strong><br />
                  {fund.amount}
                </p>

                <p>
                  <strong>Duration:</strong><br />
                  {fund.duration}
                </p>

                <p>
                  <strong>Status:</strong><br />
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {fund.status}
                  </span>
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}