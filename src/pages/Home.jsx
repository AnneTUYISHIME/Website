import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center p-10">
      <motion.h1 
        initial={{opacity:0,y:30}} 
        animate={{opacity:1,y:0}} 
        transition={{duration:0.8}}
        className="text-4xl font-bold"
      >
        Hi, I'm <span className="text-pink-600">Anne Tuyishime</span>
      </motion.h1>

      <p className="mt-4 text-lg max-w-xl">
        Software Developer | Flutter Developer | AI & IoT Enthusiast | Virtual Assistant
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-2xl">Download CV</button>
        <button className="border border-pink-500 text-pink-600 px-6 py-2 rounded-2xl">Hire Me</button>
      </div>
    </section>
  );
}