import React from "react";
import { motion } from "framer-motion";

function BirthdayPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 text-center p-4 overflow-hidden relative">
      
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-7xl text-purple-800 z-10 mt-40 font-barbie"
      >
        🎉 Happy Birthday Devisri! 🎉
      </motion.h1>

      <button
        onClick={() => {
          window.location.href = "https://birthday-beta-bice.vercel.app/"; 
        }}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:bg-pink-600 z-10"
      >
        Tap to Reveal Surprise 🎁
      </button>

    </div>
  );
}

export default BirthdayPage;
