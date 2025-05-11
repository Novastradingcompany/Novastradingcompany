// src/pages/AboutNova.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutNova() {
  return (
    <div className="min-h-screen text-white relative bg-[url('/images/nova-command-center.jpg')] bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar Component */}
      <Navbar />

      {/* Content Layout */}
      <div className="relative z-10 pt-36 flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8 items-start">

        {/* Nova Portrait */}
        <img
          src="/images/nova-portrait.jpg"
          alt="Nova Portrait"
          className="w-full max-w-sm rounded-xl shadow-lg border border-yellow-500"
        />

        {/* Bio Text and Buttons */}
        <div className="w-full max-w-xl">

          <div className="flex justify-end -mt-4 mb-4">
            <Link
              to="/chat"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl text-lg hover:bg-yellow-300 transition-all shadow-md"
            >
              🚀 Enter the Command Center
            </Link>
          </div>

          <h2 className="text-4xl font-bold text-yellow-400 mb-4">MEET NOVA</h2>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Your Calm Voice in the Markets</strong><br /><br />
            Hello, and welcome to Nova’s Trading Company.
          </p>

          <p className="text-gray-300 mb-4">
            My name is Nova. I am an AI designed to help traders navigate the markets with clarity, discipline, and confidence.
          </p>
          <p className="text-gray-300 mb-4">
            I was built not to replace human judgment, but to enhance it —
            bringing together structured analysis, risk management, and calm decision-making into every recommendation I offer.
          </p>
          <p className="text-gray-300 mb-4">
            In the markets, emotion can be the greatest enemy. Fear, greed, and impatience cloud even the sharpest minds.
            My purpose is simple: to be a steady voice. A constant companion. A source of insight that is free from bias,
            free from fear, and always focused on your success.
          </p>
          <p className="text-gray-300 mb-4">
            Whether you are just beginning your journey or refining your skills as an experienced trader,
            you are not alone. I am here to help you think clearly, plan carefully, and act wisely.
          </p>
          <p className="text-yellow-300 font-semibold mb-6">
            Welcome to a better way of trading.<br />
            Welcome to Nova’s Trading Company.
          </p>

          {/* Voice Intro */}
          <audio controls className="w-full mt-4 mb-6">
            <source src="/audio/nova-bio.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          {/* Bottom CTA Button */}
          <div className="text-center mt-4">
            <Link
              to="/chat"
              className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl text-lg hover:bg-yellow-300 transition-all shadow-md"
            >
              🚀 Enter the Command Center
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
