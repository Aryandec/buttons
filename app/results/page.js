"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countValue = searchParams.get("count") || 0;
    setCount(countValue);
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#1a1a1a]">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
          You think you will have {count} girlfriend(s)?
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Reality might be different 😢 <br /> This is the curse of this
          website!
        </h2>
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
