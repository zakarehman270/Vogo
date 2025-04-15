"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AppLayout = ({ children }) => {
  const ComingSoon = true;

  if (ComingSoon) {
    return (
      <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
        <Image
          src="/assets/logo.png"
          width={120}
          height={120}
          alt="Vogo Logo"
        />
        <h1 className="text-5xl font-bold text-gray-800 mt-4">Coming Soon</h1>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Something amazing is on the way!
        </motion.p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">DashBharod</h2>
        <nav>
          <ul>
            <li className="py-2 hover:bg-gray-700 px-2 rounded">Dashboard</li>
            <li className="py-2 hover:bg-gray-700 px-2 rounded">Settings</li>
            <li className="py-2 hover:bg-gray-700 px-2 rounded">Profile</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </header>

        {/* Body */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};
