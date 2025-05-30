"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const countValue = Number(searchParams.get("count")) || 0;
    setCount(countValue);

    if (countValue === 0) {
      setMessage(
        "You're destined to be forever alone! 😢 Better get used to it!"
      );
    } else if (countValue >= 1 && countValue <= 4) {
      setMessage(
        "Well, at least you're being realistic! But don't get too excited! 😏"
      );
    } else if (countValue >= 5 && countValue <= 7) {
      setMessage(
        "Wow, someone's being a bit too optimistic! Keep dreaming! 😂"
      );
    } else {
      setMessage(
        "Are you kidding me? You're delusional! This is not an anime! 🤣"
      );
    }
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#1a1a1a]">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          You think you will have {count} girlfriend(s)?
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8 leading-relaxed">
          {message}
        </h2>
        <p className="text-xl text-red-400 mb-6">
          This is the curse of this website! 🔮
        </p>
        <button
          className="btn btn-primary px-6 py-3 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={<div className="text-white text-center mt-10">Loading...</div>}
    >
      <ResultsContent />
    </Suspense>
  );
}
