import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/80 p-4 backdrop-blur-md border-b border-yellow-400">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-yellow-400 font-bold text-2xl text-center">Nova's Trading Company</h1>
        <nav className="flex space-x-6 text-white">
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
  );
}
