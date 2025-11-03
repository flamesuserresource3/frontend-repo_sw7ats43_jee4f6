import { motion } from 'framer-motion';
import { Rocket, Shield, Settings, BarChart3, ArrowRight, ExternalLink, Twitter, Github, MessageCircle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Sections() {
  return (
    <div className="relative w-full bg-[#0a0a0a]">
      {/* Tools */}
      <section id="tools" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Tools
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Rocket,
              title: 'Indexer',
              desc: 'High-throughput on-chain indexer tailored for Solana programs.',
            },
            {
              icon: Settings,
              title: 'Airdrop Orchestrator',
              desc: 'Automate targeted airdrops with safeguards and analytics.',
            },
            {
              icon: Shield,
              title: 'NFT Gating SDK',
              desc: 'Drop-in access control for communities and dApps.',
            },
            {
              icon: BarChart3,
              title: 'Community Analytics',
              desc: 'Cohort dashboards and growth metrics in real-time.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-[0_0_40px_rgba(153,69,255,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(153,69,255,0.25),transparent_60%)]" />
              </div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b0b33] text-[#cdb5ff] ring-1 ring-[#9945ff]/30">
                <item.icon size={22} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-300">{item.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-transparent px-3 py-1.5 text-xs text-zinc-300 ring-1 ring-[#9945ff]/40 transition-all hover:-translate-y-0.5 hover:bg-[#160a2a] hover:text-white hover:shadow-[0_0_22px_rgba(153,69,255,0.45)]">
                Learn more <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              About
            </h2>
            <p className="mb-4 text-zinc-300">
              We craft high-quality, production-ready tools for the Solana ecosystem. Our focus is speed, reliability, and developer experience. From indexing pipelines to governance infra, we help communities automate, build, and scale.
            </p>
            <p className="text-zinc-400">
              Backed by deep protocol knowledge and a shipping-first culture, Choplet Studios partners with teams to unlock growth while keeping operational overhead low.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -inset-28 bg-[radial-gradient(circle_at_center,rgba(153,69,255,0.18),transparent_60%)]" />
              </div>
              <ul className="relative grid gap-3 text-sm text-zinc-200">
                <li className="flex items-center justify-between rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
                  <span>Performance-centric development</span>
                  <span className="rounded-full bg-[#160a2a] px-2 py-0.5 text-xs text-[#cdb5ff] ring-1 ring-[#9945ff]/40">Fast</span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
                  <span>Security-first tooling</span>
                  <span className="rounded-full bg-[#160a2a] px-2 py-0.5 text-xs text-[#cdb5ff] ring-1 ring-[#9945ff]/40">Safe</span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
                  <span>Developer experience + docs</span>
                  <span className="rounded-full bg-[#160a2a] px-2 py-0.5 text-xs text-[#cdb5ff] ring-1 ring-[#9945ff]/40">DX</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact + Footer */}
      <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -inset-28 bg-[radial-gradient(circle_at_center,rgba(153,69,255,0.18),transparent_60%)]" />
          </div>
          <div className="relative grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-2 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                Let’s build together
              </h2>
              <p className="text-zinc-300">
                Reach us on Discord or socials. We typically respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1b0b33] px-4 py-2 text-sm text-white ring-1 ring-[#9945ff]/40 transition hover:shadow-[0_0_28px_rgba(153,69,255,0.55)]"
              >
                <MessageCircle size={18} /> @ChopletStudios
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm text-zinc-200 ring-1 ring-[#9945ff]/40 transition hover:bg-[#160a2a] hover:text-white hover:shadow-[0_0_24px_rgba(153,69,255,0.45)]"
              >
                <Twitter size={18} /> Twitter
                <ExternalLink size={16} className="opacity-70" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm text-zinc-200 ring-1 ring-[#9945ff]/40 transition hover:bg-[#160a2a] hover:text-white hover:shadow-[0_0_24px_rgba(153,69,255,0.45)]"
              >
                <Github size={18} /> GitHub
                <ExternalLink size={16} className="opacity-70" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-zinc-400 sm:flex-row">
          <p>© 2025 Choplet Studios</p>
          <div className="flex items-center gap-4">
            <a href="#tools" className="hover:text-white">Tools</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </section>
    </div>
  );
}
