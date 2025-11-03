import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a] pt-16">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle animated purple pulse background overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-10 h-80 w-80 rounded-full bg-[#9945ff]/20 blur-[80px] animate-pulse" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#7a2cff]/20 blur-[100px] animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Choplet Studios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          Building tools that power Solana communities.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.2em] text-[#bba7ff]"
        >
          Automate. Build. Scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => handleScroll('tools')}
            className="rounded-full bg-[#1b0b33] px-6 py-3 text-sm font-medium text-white ring-1 ring-[#9945ff]/40 transition-shadow hover:shadow-[0_0_32px_rgba(153,69,255,0.65)]"
          >
            Explore Tools
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="rounded-full bg-transparent px-6 py-3 text-sm font-medium text-zinc-200 ring-1 ring-[#9945ff]/40 transition-all hover:bg-[#160a2a] hover:text-white hover:shadow-[0_0_24px_rgba(153,69,255,0.55)]"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
