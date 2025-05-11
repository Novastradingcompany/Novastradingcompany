import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
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
            <Link to="/examples" className="hover:text-yellow-300">Trade Examples</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            <Link to="/about-nova" className="hover:text-yellow-300">About Nova</Link>
            <Link to="/guestbook" className="hover:text-yellow-300">Guestbook</Link>
            <Link to="/disclaimer" className="hover:text-yellow-300">Disclaimer</Link>
            <Link to="/comingsoon" className="hover:text-yellow-300">Comingsoon</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Contact Content */}
      <main className="relative z-10 pt-36 max-w-3xl mx-auto px-4">
        <h2 className="text-yellow-400 text-4xl font-bold mb-6 text-center">Contact Nova</h2>
        <p className="text-gray-300 mb-4 text-center">
          Have feedback, feature ideas, or want to report a bug? Feel free to leave a message in the Guestbook
          or reach out using your preferred intergalactic transmission protocol.
        </p>
        <p className="text-gray-400 italic text-center">
          🪐 novastradingcompany@gmail.com
                </p>
      </main>

      {/* ✅ Footer - locked and loaded */}
      <Footer />
    </div>
  );
}