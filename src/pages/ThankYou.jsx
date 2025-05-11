import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[url('/images/nova-command-center.jpg')] bg-cover bg-center relative overflow-hidden">
      {/* 🌌 Starfield background layer */}
      <div className="absolute inset-0 z-0">
        <div className="animate-starfield w-full h-full opacity-20" />
      </div>

      {/* 🪐 Thank you message */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 bg-black/70 p-8 rounded-xl text-center shadow-xl border border-yellow-400"
      >
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Thank You!</h1>
        <p className="text-gray-200 mb-6">Your message has been received. Nova is reviewing it now.</p>
        <Link
          to="/"
          className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
