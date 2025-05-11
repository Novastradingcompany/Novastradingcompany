import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { askNova } from "../api/AskNova"; // Ensure this path is correct

export default function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleAskNova = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    setShowResponse(false);

    try {
      const result = await askNova(userMessage);
      setChatResponse(result);
    } catch (error) {
      console.error("Error fetching response:", error);
      setChatResponse("Sorry, something went wrong. Please try again.");
    }

    setLoading(false);
    setShowResponse(true);
    setUserMessage(""); // ✅ Clears input after submission
  };

  return (
    <>
      <Navbar />

      {/* Background Image */}
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

        {/* Main Chat Box */}
        <main className="relative z-10 pt-36 max-w-3xl mx-auto px-6 pb-20">
          <h2 className="text-yellow-400 text-4xl font-bold mb-2 text-center">Chat with Nova</h2>
          <p className="text-gray-300 text-center mb-8">Ask Nova anything!</p>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <label className="block text-lg font-semibold mb-2">Your Message</label>
            <input
              type="text"
              placeholder="Type your question here"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onFocus={() => {
                setShowResponse(false);
                setUserMessage(""); // ✅ Clears input on click
              }}
              className="w-full p-3 text-black rounded-lg mb-4"
            />
            <button
              onClick={handleAskNova}
              disabled={loading}
              className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl hover:bg-yellow-300 transition-all"
            >
              {loading ? "Thinking..." : "Ask Nova"}
            </button>
          </div>

          {showResponse && (
            <div className="bg-slate-800 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl text-yellow-300 mb-2">Nova’s Response:</h3>
              <p className="text-gray-200 whitespace-pre-wrap">{chatResponse}</p>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-gray-400 text-sm text-center mt-8">
          {/*}  **Disclaimer:** This chat provides general trading knowledge and is not financial advice.*/}
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}