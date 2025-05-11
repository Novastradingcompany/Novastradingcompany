import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function BullCallSpread() {
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
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">Bull Call Spread (F)</h2>

        <p className="text-gray-300 mb-6">A bullish options strategy using long and short calls to define risk, reduce cost, and target upside profit.</p>

        <div className="bg-slate-900 p-6 rounded-xl shadow-xl mb-6">
          <h3 className="text-2xl text-yellow-300 mb-4">📋 Setup</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Buy 1 F $10 Call (exp: 5/17) at $0.60</li>
            <li>Sell 1 F $12 Call (exp: 5/17) at $0.25</li>
            <li>Net Debit: $0.35 ($35 total)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📈 Max Profit</h3>
            <p className="text-gray-200">$165 if F closes at or above $12</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📉 Max Loss</h3>
            <p className="text-gray-200">$35 (your initial cost)</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">🧮 Break-even</h3>
            <p className="text-gray-200">$10.35 (Strike A + Net Debit)</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">📊 Market Outlook</h3>
            <p className="text-gray-200">Bullish near-term view on Ford (F) with moderate upside expectations</p>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-xl mt-8">
          <h3 className="text-2xl text-yellow-300 mb-2">🧠 Nova Explains Like You're 5</h3>
          <p className="text-gray-200">
            Imagine you think your friend’s toy car will be worth more soon. You pay $0.60 to buy it for $10.
            To save money, you agree to sell it to someone else for $12 — but only get $0.25 for that deal.
            If the toy car goes up to $12, you win! You bought low and sold higher — and keep the difference.
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




