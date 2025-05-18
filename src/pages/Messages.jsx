import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../api/Firebase";
import Footer from "../components/Footer";

const ADMIN_EMAIL = "novastradingcompany@gmail.com";

export default function Messages() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!user || user.email !== ADMIN_EMAIL) return;
      const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const entries = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(entries);
      setLoading(false);
    };
    fetchMessages();
  }, [user]);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  if (!user) {
    return (
      <div className="text-white text-center mt-40">
        <p>Please sign in to view messages.</p>
        <button
          onClick={handleSignIn}
          className="mt-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  if (user.email !== ADMIN_EMAIL) {
    return <div className="text-red-400 text-center mt-40 font-bold">Access Denied</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="flex justify-between items-center max-w-3xl mx-auto mb-6">
        <h1 className="text-yellow-400 text-4xl font-bold">Guestbook Messages</h1>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-1 rounded"
        >
          Sign out
        </button>
      </div>
      {loading ? (
        <p className="text-center text-gray-400">Loading messages...</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white/10 border border-yellow-500 rounded-xl p-4 shadow">
              <p className="text-yellow-300 font-semibold">{msg.name} ({msg.email})</p>
              <p className="text-gray-100 mt-1 whitespace-pre-line">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-2">{msg.createdAt?.toDate?.().toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

