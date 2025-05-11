import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Examples() {
  return (
    <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🔲 Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/80 p-4 backdrop-blur-md border-b border-yellow-400">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-yellow-400 font-bold text-2xl text-center">Nova's Trading Company</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/chat" className="hover:text-yellow-300">Chat</Link>
            <Link to="/glossary" className="hover:text-yellow-300">Glossary</Link>
            <Link to="/examples" className="hover:text-yellow-300 font-bold">Trade Examples</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/about-nova" className="hover:text-yellow-300">About Nova</Link>
            <Link to="/guestbook" className="hover:text-yellow-300">Guestbook</Link>
            <Link to="/disclaimer" className="hover:text-yellow-300">Disclaimer</Link>
            <Link to="/comingsoon" className="hover:text-yellow-300">Comingsoon</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Examples Content */}
      <main className="relative z-10 pt-36 max-w-4xl mx-auto px-4">
        <h2 className="text-yellow-400 text-4xl font-bold mb-6 text-center">Trade Examples</h2>

        <div className="space-y-6 text-gray-200">

          {/* 🔹 Bear Put Spread */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300">
              📉 <Link to="/bear-put-spread" className="hover:underline hover:text-yellow-200">
                Bear Put Spread (HOG)
              </Link>
            </h3>
            <p>
              A directional trade using long puts to profit from downward movement. Risk is capped by buying a lower-strike put.
            </p>
          </div>

          {/* 🔹 Bull Call Spread */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300">
              📈 <Link to="/bullcallspread" className="hover:underline hover:text-yellow-200">
                Bull Call Spread (F)
              </Link>
            </h3>
            <p>
              A bullish trade using long and short calls to define risk and reduce cost while targeting upside profit.
            </p>
          </div>

          {/* 🔹 Iron Condor */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300">
              🧊 <Link to="/ironcondor" className="hover:underline hover:text-yellow-200">
                Iron Condor (AMGN)
              </Link>
            </h3>
            <p>
              A non-directional strategy that profits from time decay and price stability. Used when expecting minimal movement.
            </p>
          </div>

        </div>
      </main>

      {/* ✅ Footer - added here */}
      <Footer />
    </div>
  );
}