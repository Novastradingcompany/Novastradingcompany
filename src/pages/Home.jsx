import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[url('/images/nova-command-center.jpg')] bg-cover bg-center">
      <div className="bg-black/70 p-8 rounded-xl text-center shadow-xl border border-yellow-400">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Thank You!</h1>
        <p className="text-gray-200 mb-6">Your message has been received. Nova is reviewing it now.</p>
        <Link to="/" className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
