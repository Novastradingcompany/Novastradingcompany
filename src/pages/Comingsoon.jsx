import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen text-white relative bg-[url('/images/Nova-Office.png')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/30 z-0" />

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
            <Link to="/disclaimer" className="hover:text-yellow-300">Disclaimer</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 ComingSoon Content */}
       <main className="relative z-10 pt-36 max-w-3xl mx-auto px-4">
        <h2 className="text-yellow-400 text-4xl font-bold mb-6 text-center">Coming Soon</h2>
        <p className="text-gray-300 mb-4">
          Members Section
        </p>
        <p className="text-gray-300 mb-4">
          Newsletter
        </p>
        <p className="text-gray-300 mb-4">
          Trading Strategies
        </p>
        <p className="text-gray-100 mb-4">
         Comments Section
        </p>
      </main> 

      {/* ✅ Footer included */}
      <Footer />
    </div>
  );
}