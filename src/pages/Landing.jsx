import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen text-white bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🔲 Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black/80 p-4 backdrop-blur-md border-b border-yellow-400">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-yellow-400 font-bold text-2xl text-center">
            Nova's Trading Company
          </h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/chat" className="hover:text-yellow-300">Chat</Link>
            <Link to="/glossary" className="hover:text-yellow-300">Glossary</Link>
            <Link to="/examples" className="hover:text-yellow-300">Trade Examples</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/about-nova" className="hover:text-yellow-300">About Nova</Link>
            <Link to="/guestbook" className="hover:text-yellow-300">Guestbook</Link>
            <Link to="/disclaimer" className="hover:text-yellow-300">Disclaimer</Link>
            <Link to="/comingsoon" className="hover:text-yellow-300">Comingsoon</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Main Call to Action */}
      <main className="relative z-10 pt-36 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
  Trade Smarter. Think Clearer. Execute with Confidence.
</h2>


        <p className="text-lg text-gray-200 mb-6 max-w-xl">
          Nova is your AI-powered companion for <span className="font-bold">disciplined trading, sharp decision-making, and strategic execution</span>—so you stay ahead of the markets.
        </p>
        <Link
  to="/about-nova"
  className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl text-lg hover:bg-yellow-300 transition-all shadow-md hover:shadow-yellow-400"
>
  🚀 Meet Nova
</Link>



        {/* 🔥 Feature Teaser */}
        <div className="mt-8 bg-black/40 p-6 rounded-lg shadow-lg max-w-lg">
          <h3 className="text-xl font-bold text-yellow-300 mb-4">
            🔹 What Nova Can Do for You:
          </h3>
          <ul className="text-gray-300 space-y-2 text-left">
            <li>✅ AI-Powered Market Insights → Get smarter predictions and trade alerts.</li>
            <li>✅ Real-Time Strategy Optimization → Make confident decisions with AI-backed analysis.</li>
            <li>✅ Seamless AI Chat Experience → Get answers instantly, refine approaches, and stay ahead.</li>
          </ul>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}