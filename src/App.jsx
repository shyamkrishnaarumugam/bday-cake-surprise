import React, { useState, useEffect, Suspense } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import CakeScene from "./CakeModel";

function BirthdayPage() {
  const [showSurprise, setShowSurprise] = useState(false);

  // ⭐ Auto-redirect after 5 seconds
  useEffect(() => {
    if (showSurprise) {
      const timer = setTimeout(() => {
        window.location.href = "https://birthday-beta-bice.vercel.app/"; // 👉 Replace with your URL
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSurprise]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 text-center p-4 overflow-hidden relative">
      {showSurprise && <Confetti />}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-7xl text-purple-800 z-10 mt-40 font-barbie"
      >
        🎉 Happy Birthday Devisri! 🎉
      </motion.h1>

      {!showSurprise ? (
        <button
          onClick={() => setShowSurprise(true)}
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:bg-pink-600 z-10"
        >
          Tap to Reveal Surprise 🎁
        </button>
      ) : (
        <>
          <div className="w-full h-full absolute top-0 left-0 z-0">
            <Suspense fallback={null}>
              <CakeScene />
            </Suspense>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-xl text-purple-700 z-10 bg-white/20 backdrop-blur-lg p-9 rounded-2xl border border-white/50"
          >
            <p className="font-barbie text-4xl">
              Wish you many more Happy Returns Of the Day S. Devisri
            </p>
            <p className="mt-4 text-lg text-purple-900">
              Redirecting you to the surprise page in 5 seconds… 🎁✨
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default BirthdayPage;
