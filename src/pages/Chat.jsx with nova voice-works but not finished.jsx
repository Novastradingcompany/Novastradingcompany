import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { askNova } from "../api/AskNova"; // Ensure path is correct

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  // 🎙️ ElevenLabs API Key & Voice ID
  const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;
  const VOICE_ID = "8FInzeifYQanJKdAlY7p"; // Nova’s ElevenLabs Voice ID

  // 🔊 Function to make Nova speak dynamically (ONLY when "Talk to Nova" is clicked)
  const speak = async (text) => {
    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch ElevenLabs voice.");

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      const novaVoice = new Audio(audioUrl);
      novaVoice.play();

      // 🔄 Immediately restart listening after Nova speaks
      novaVoice.onended = () => startListening(); 

    } catch (error) {
      console.error("Error generating Nova's voice:", error);
    }
  };

  // 🎤 Speech-to-Text: Auto-send voice input when talking is activated
  const startListening = () => {
    console.log("Starting speech recognition..."); 

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    setListening(true);

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      console.log("Speech recognized:", event.results[0][0].transcript);
      const voiceInput = event.results[0][0].transcript;
      sendMessage(voiceInput, true); // Auto-send recognized voice input with speech
    };

    recognition.onend = () => {
      console.log("Speech recognition ended."); 
      setListening(true); // Keeps listening enabled for continued conversation
    };

    recognition.start();
  };

  const sendMessage = async (message, shouldSpeak = false) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setLoading(true);

    try {
      const response = await askNova(message);
      setMessages((prev) => [...prev, { sender: "nova", text: response }]);

      if (shouldSpeak) speak(response); // 🔊 Nova speaks ONLY when requested
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { sender: "nova", text: "Sorry, something went wrong." }]);
    }

    setLoading(false);
  };

  // 🔄 Auto-scroll chat container to show latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
        <div className="absolute inset-0 bg-black/60 z-0" />

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

        <main className="relative z-10 pt-36 max-w-3xl mx-auto px-6 pb-20">
          <h2 className="text-yellow-400 text-4xl font-bold mb-2 text-center">Chat with Nova</h2>
          <p className="text-gray-300 text-center mb-8">Ask Nova anything!</p>

          <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
            <div ref={chatContainerRef} className="max-h-96 overflow-y-auto mb-4 p-4 bg-black/40 rounded-lg">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl mb-2 ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-yellow-300 self-start"}`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <div className="text-yellow-400">Nova is thinking...</div>}
            </div>

            {/* ✨ Type OR Speak to Nova */}
            <input
              type="text"
              ref={inputRef}
              placeholder="Type your question here..."
              className="w-full p-3 text-black rounded-lg mb-4"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(e.target.value); // Text input WITHOUT speech
                  e.target.value = ""; // Clear input after sending
                }
              }}
            />
            <button
              onClick={startListening}
              className={`bg-blue-600 text-white font-bold px-6 py-2 rounded-xl mt-4 hover:bg-blue-500 transition-all ${listening ? "opacity-50" : ""}`}
              disabled={listening}
            >
              {listening ? "Listening..." : "Talk to Nova"}
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}