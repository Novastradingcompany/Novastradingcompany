import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 text-yellow-300 text-center p-3 text-sm mt-12 border-t border-yellow-500">
      <p>
        Disclaimer: Nova is an educational AI and does not provide financial advice. {" "}
        <Link to="/disclaimer" className="underline hover:text-yellow-400">
          Read full disclaimer
        </Link>.
      </p>
      <p className="text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} Nova’s Trading Company. All rights reserved.
      </p>
    </footer>
  );
}
