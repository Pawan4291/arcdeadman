"use client"

import AnimatedBackground from "./components/AnimatedBackground"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative text-white overflow-hidden">

      <AnimatedBackground />

      {/* HERO */}

      <section className="relative pt-32 pb-32 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Secure Your
              <span className="text-blue-500"> Crypto Legacy</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mb-10">
              ArcDeadman is a decentralized dead-man switch for crypto wallets.
              If your wallet becomes inactive, assets automatically transfer
              to a recovery wallet using Arc automation.
            </p>

            <div className="flex gap-6">

              <a href="/create-vault">
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-300">
                  Create Vault
                </button>
              </a>

              <button className="border border-gray-700 px-8 py-4 rounded-xl text-lg">
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative">

            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="bg-[#0E1117]/70 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-10 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10 transition duration-300">

              <p className="text-gray-400 text-sm mb-6">Vault Status</p>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Wallet</span>
                <span className="text-white">0x68...6348</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Recovery Wallet</span>
                <span className="text-white">0x21...A89C</span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Inactivity Timer</span>
                <span className="text-white">30 Days</span>
              </div>

              <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-sm">
                Automation Monitoring Active
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-32 border-t border-gray-800 bg-gradient-to-b from-[#060B12] to-[#0B0F17]"
      >

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-24 relative inline-block">

            <span className="absolute -inset-3 blur-xl bg-blue-500/10"></span>

            <span className="relative">
              How Deadman Vault Works
            </span>

          </h2>

          <div className="relative grid md:grid-cols-3 gap-16">

            {/* LINE */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"></div>

            {/* STEP 1 */}

            <div>

              <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <span className="text-blue-400 font-bold">1</span>
              </div>

              <h3 className="font-semibold mb-2">
                Create Vault
              </h3>

              <p className="text-gray-400 text-sm">
                Define recovery wallet and inactivity timer.
              </p>

            </div>

            {/* STEP 2 */}

            <div>

              <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <span className="text-blue-400 font-bold">2</span>
              </div>

              <h3 className="font-semibold mb-2">
                Stay Active
              </h3>

              <p className="text-gray-400 text-sm">
                Periodically confirm activity to keep your vault secure.
              </p>

            </div>

            {/* STEP 3 */}

            <div>

              <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                <span className="text-blue-400 font-bold">3</span>
              </div>

              <h3 className="font-semibold mb-2">
                Automatic Recovery
              </h3>

              <p className="text-gray-400 text-sm">
                Arc automation executes recovery if inactivity triggers.
              </p>

            </div>

          </div>

        </div>

      </motion.section>

      {/* ARC AUTOMATION */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-28 bg-[#0E1117] border-t border-gray-800"
      >

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-3xl font-bold mb-6 relative inline-block">

              <span className="absolute -inset-3 blur-xl bg-blue-500/10"></span>

              <span className="relative">
                Built on Arc Automation
              </span>

            </h2>

            <p className="text-gray-400 mb-6">
              Arc automation monitors inactivity and securely executes
              encrypted recovery instructions directly on-chain.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-400">🔒</span>
              <span>Encrypted recovery intents</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-400">⚡</span>
              <span>Autonomous execution</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-400">🛡</span>
              <span>Trustless recovery logic</span>
            </div>

          </div>

          <div className="h-[260px] rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-gray-800 flex items-center justify-center text-gray-500">
            Arc Automation Layer
          </div>

        </div>

      </motion.section>

      {/* FINAL CTA */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative py-20 border-t border-gray-800 overflow-hidden"
      >

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-4">
            Secure Your Crypto Legacy
          </h2>

          <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
            ArcDeadman ensures your assets remain recoverable even if your wallet becomes inactive.
            Powered by Arc automation and encrypted recovery logic.
          </p>

          <a href="/create-vault">

            <button className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-300">

              Create Your Vault

            </button>

          </a>

        </div>

      </motion.section>

    </main>
  )
}