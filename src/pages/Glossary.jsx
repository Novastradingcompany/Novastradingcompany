import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { askNova } from "../api/AskNova";
import { Link } from "react-router-dom";



export default function Glossary() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFiveMode, setIsFiveMode] = useState(false);
  const answerContainerRef = useRef(null);

  // 📖 Reference for technical analysis (pulled from the uploaded document)
  const technicalKnowledgeBase = {
    "hammer candlestick": {
      text: "A hammer candlestick is a bullish reversal pattern with a small body and long lower wick. It indicates a potential trend reversal. Example: CRL on March 5th, 2021.",
      image: "/images/candlestick-patterns/hammer.png"
    },
    "shooting star": {
      text: "A shooting star candlestick is a bearish reversal pattern with a small body and long upper wick, showing potential downward movement. Example: SPOT on Nov 2nd, 2021.",
      image: "/images/candlestick-patterns/shooting-star.png"
    },
    "support level": {
      text: "Support is a price level where buyers tend to step in. If broken, it can flip into resistance. Example: GBP/USD in 2013.",
      image: "/images/support-resistance-chart.png"
    },
    "head and shoulders": {
      text: "A Head and Shoulders pattern signals an uptrend reversing into a downtrend. Example: TSLA from Jan 7th to Jan 22nd, 2021.",
      image: "/images/head-shoulders-pattern.png"
    }
  };

  const handleAskNova = async (fiveMode = false) => {
    if (!question.trim()) return;
    setLoading(true);
    setShowAnswer(false);
    setIsFiveMode(fiveMode);

    const query = question.toLowerCase();
    const responseData = technicalKnowledgeBase[query];

    let response;
    if (responseData) {
      response = responseData.text; // Pulling structured data from uploaded document
    } else {
      response = await askNova(fiveMode ? `${question} Explain like I am 5.` : question);
    }

    setAnswer(response);
    setLoading(false);
    setShowAnswer(true);
    setQuestion(""); // Clears input for next question
  };

  // Auto-scroll to answer box when a new answer appears
  useEffect(() => {
    if (showAnswer && answerContainerRef.current) {
      setTimeout(() => {
        answerContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [showAnswer]);

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

      <main className="relative z-10 pt-36 max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-yellow-400 text-4xl font-bold mb-2 text-center">Nova’s Options Glossary</h2>
        <p className="text-gray-300 text-center mb-8">
          Ask Nova to explain any trading term — in simple or advanced language.
        </p>

        {/* 🔥 Suggested Questions Section (Restored) */}
        <div className="bg-black/40 p-4 rounded-lg shadow-lg mb-6 text-white">
          <h3 className="text-lg font-bold text-yellow-300 mb-3 text-center">
            Not sure what to ask? Click on one of these:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "What is a hammer candlestick?",
              "How does implied volatility affect options?",
              "Explain a covered call in simple terms.",
              "How can Nova help refine my trading strategy?",
            ].map((query) => (
              <button
                key={query}
                className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-300 text-black font-semibold"
                onClick={() => setQuestion(query)}
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 Search & Query Box */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-xl mb-6">
          <label className="block text-lg font-semibold mb-2 text-yellow-300">
            Ask Nova a Term or Concept
          </label>
          <input
            type="text"
            placeholder="Example: What is a covered call?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 text-white bg-gray-800 rounded-lg mb-4 placeholder-gray-400"
          />
          <div className="flex justify-center space-x-4">
            <button onClick={() => handleAskNova(false)} disabled={loading} className="bg-teal-400 text-white font-bold px-6 py-2 rounded-xl hover:bg-teal-300 transition-all">
              {loading && !isFiveMode ? "Thinking..." : "Ask Nova"}
            </button>
            <button onClick={() => handleAskNova(true)} disabled={loading} className="bg-yellow-300 text-black font-bold px-6 py-2 rounded-xl hover:bg-yellow-200 transition-all">
              {loading && isFiveMode ? "Thinking..." : "🌸 Explain Like I Am a 5 Year Old"}
            </button>
          </div>
        </div>

        {showAnswer && (
          <div ref={answerContainerRef} className="bg-slate-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl text-yellow-300 mb-2">Nova’s Answer:</h3>
            <p className="text-gray-200 whitespace-pre-wrap">{answer}</p>
            {technicalKnowledgeBase[question.toLowerCase()]?.image && (
              <img src={technicalKnowledgeBase[question.toLowerCase()].image} alt="Chart Example" className="mt-4 rounded-lg max-w-full"/>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}