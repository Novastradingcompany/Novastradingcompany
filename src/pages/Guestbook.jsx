import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../api/Firebase";
import Footer from "../components/Footer";

export default function Guestbook() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      await addDoc(collection(db, "guestbook"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      // Redirect to thank-you page
      window.location.href = "/thankyou";
      return;
    } catch (error) {
      console.error("Error saving message:", error);
      alert("There was a problem submitting your message.");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/60 z-0" />

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
            <Link to="/comingsoon" className="hover:text-yellow-300">Comingsoon</Link>
          </nav>
        </div>
      </header>

      {/* 🔲 Guestbook Section */}
      <main className="relative z-10 pt-36 max-w-3xl mx-auto px-4">
        <h2 className="text-yellow-400 text-4xl font-bold mb-6 text-center">Guestbook</h2>
        <p className="text-gray-300 mb-6 text-center">
          Leave a comment, question, or just say hello! Your feedback keeps Nova sharp.
        </p>

        <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl text-black space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full p-2 rounded border border-gray-300 h-32 resize-none focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={submitting}
            className="bg-yellow-400 px-4 py-2 rounded font-bold hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </main>

      {/* ✅ Footer locked in */}
      <Footer />
    </div>
  );
}

