"use client"

import { useAccount } from "wagmi"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedBackground from "../components/AnimatedBackground"

export default function CreateVault() {

  const { address, isConnected } = useAccount()
  const [recovery, setRecovery] = useState("")
  const [days, setDays] = useState(30)

  const isValidAddress = recovery.startsWith("0x") && recovery.length > 10
  const isValidDays = days > 0

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
      <AnimatedBackground />

      {/* MAIN GLOW */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center">

        {/* HEADING CENTERED */}
        <div className="max-w-4xl mx-auto mb-16">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Create Your <span className="text-blue-500">Deadman Vault</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Secure your crypto assets with automated recovery.
            Set inactivity rules and let Arc handle execution privately.
          </p>

        </div>

        {/* BOXES SECTION */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >

            <div className="h-full bg-[#0E1117]/80 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/30 transition">

              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">
                  Recovery Wallet
                </label>

                <input
                  type="text"
                  placeholder="0x..."
                  value={recovery}
                  onChange={(e) => setRecovery(e.target.value)}
                  className="w-full bg-[#0B0F17] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="mb-8">
                <label className="text-sm text-gray-400 mb-2 block">
                  Inactivity Timer (Days)
                </label>

                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full bg-[#0B0F17] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <button
                disabled={!isConnected || !isValidAddress || !isValidDays}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition
                  ${isConnected && isValidAddress && isValidDays
                    ? "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                    : "bg-gray-700 cursor-not-allowed"
                  }`}
              >
                {isConnected ? "Create Vault" : "Connect Wallet First"}
              </button>

            </div>

          </motion.div>

          {/* RIGHT PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >

            <div className="h-full bg-[#0E1117]/80 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/30 transition relative overflow-hidden">

              {/* INNER GLOW */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full"></div>

              <p className="text-gray-400 text-sm mb-6">
                Vault Preview
              </p>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Owner</span>
                <span className="text-white">
                  {address
                    ? `${address.slice(0, 6)}...${address.slice(-4)}`
                    : "Not Connected"}
                </span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Recovery</span>
                <span className="text-white">
                  {recovery || "0x..."}
                </span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Timer</span>
                <span className="text-white">
                  {days} Days
                </span>
              </div>

              <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-sm">
                Automation Ready
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      <div className="relative border-t border-gray-800 py-10 px-6">

  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    <div>
      <p className="text-2xl font-bold text-white">100%</p>
      <p className="text-gray-400 text-sm">On-chain Execution</p>
    </div>

    <div>
      <p className="text-2xl font-bold text-white">Private</p>
      <p className="text-gray-400 text-sm">Encrypted Intents</p>
    </div>

    <div>
      <p className="text-2xl font-bold text-white">No Custody</p>
      <p className="text-gray-400 text-sm">You Own Funds</p>
    </div>

    <div>
      <p className="text-2xl font-bold text-white">24/7</p>
      <p className="text-gray-400 text-sm">Automation</p>
    </div>

  </div>

</div>

    </main>

  )
}