import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 🔲 Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/80 p-4 backdrop-blur-md border-b border-yellow-400">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-yellow-400 font-bold text-2xl text-center">Nova's Trading Company</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/chat" className="hover:text-yellow-300">Chat</Link>
            <Link to="/glossary" className="hover:text-yellow-300">Glossary</Link>
            <Link to="/examples" className="hover:text-yellow-300">Trade Examples</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/about-nova" className="hover:text-yellow-300">About Nova</Link>
            <Link to="/guestbook" className="hover:text-yellow-300">Guestbook</Link>
            <Link to="/disclaimer" className="hover:text-yellow-300>">Disclaimer</Link>
            <Link to="/comingsoon" className="hover:text-yellow-300">Comingsoon</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Disclaimer Content */}
      <main className="relative z-10 pt-36 max-w-3xl mx-auto px-4">
        <h2 className="text-yellow-400 text-4xl font-bold mb-6 text-center">Disclaimer</h2>
        <p className="text-gray-300 mb-4">
          Nova is an artificial intelligence assistant created for educational and informational purposes only.
          Nova is not a licensed financial advisor, and nothing provided by Nova should be considered personalized investment advice.
        </p>
        <p className="text-gray-300 mb-4">
          While Nova may provide trade examples, explain strategies, or analyze technical patterns, all content should be treated
          as general information. Users are solely responsible for their own investment decisions.
        </p>
        <p className="text-gray-300 mb-4">
          Nova’s Trading Company and its creators make no guarantees regarding financial outcomes and accept no liability for losses
          related to the use of this site or its tools. All trading involves risk, and past performance does not guarantee future results.
        </p>
        <p className="text-gray-400 text-sm mt-6 text-center italic">
          When in doubt, consult a licensed financial professional before making any financial decision.
        </p>
      </main>

      {/* ✅ Footer included */}
      <Footer />
    </div>
  );
}