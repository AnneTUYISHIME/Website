import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800"
      >
        Hi, I'm <span className="text-pink-600">Anne Tuyishime</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-gray-600 max-w-xl"
      >
        Software Developer | Flutter Developer | AI & IoT Enthusiast | Virtual Assistant
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-md transition">
          Download CV
        </button>

        <button className="border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-2xl transition">
          Hire Me
        </button>
      </motion.div>

    </section>
  );
}