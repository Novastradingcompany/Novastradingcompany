import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function IronCondor() {
  return (
    <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🔲 Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/80 p-4 shadow backdrop-blur-md border-b border-yellow-400">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-yellow-400 font-bold text-2xl text-center">Nova's Trading Company</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/chat" className="hover:text-yellow-300">Chat</Link>
            <Link to="/glossary" className="hover:text-yellow-300">Glossary</Link>
            <Link to="/examples" className="hover:text-yellow-300 font-bold">Trade Examples</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Main Content */}
      <main className="relative z-10 pt-32 max-w-4xl mx-auto px-6 pb-12">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Iron Condor (AMGN)</h2>

        <p className="text-gray-300 mb-6">
          A non-directional options strategy that profits when the stock price stays within a certain range.
          It uses both a bull put spread and a bear call spread to generate income.
        </p>

        <div className="bg-slate-900 p-6 rounded-xl shadow-xl mb-6">
          <h3 className="text-2xl text-yellow-300 mb-4">📋 Setup</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Sell 1 AMGN $260 Call (exp: 4/25)</li>
            <li>Buy 1 AMGN $265 Call (exp: 4/25)</li>
            <li>Sell 1 AMGN $230 Put (exp: 4/25)</li>
            <li>Buy 1 AMGN $225 Put (exp: 4/25)</li>
            <li>Net Credit: $1.50 ($150 total)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📈 Max Profit</h3>
            <p className="text-gray-200">$150 if AMGN stays between $230 and $260 at expiration</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📉 Max Loss</h3>
            <p className="text-gray-200">$350 if AMGN moves outside the wings ($225 or $265)</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">🧮 Break-even</h3>
            <p className="text-gray-200">
              $228.50 on the downside (Put Strike - Credit)  
              and $261.50 on the upside (Call Strike + Credit)
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📊 Market Outlook</h3>
            <p className="text-gray-200">
              Neutral — expecting low volatility and limited stock movement around $245.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-xl mt-8">
          <h3 className="text-2xl text-yellow-300 mb-2">🧠 Nova Explains Like You're 5</h3>
          <p className="text-gray-200">
            Imagine you bet your friend that a toy will stay safely inside a fenced yard.
            You get paid if it stays inside. But if the toy escapes through either the front gate (goes too high) or the back gate (goes too low), you have to give back the money.
            You win when the toy just stays in the middle!
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link to="/examples" className="text-teal-400 hover:text-teal-300 underline text-lg">
            ← Back to Trade Examples
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}










