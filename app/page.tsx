"use client"

import { Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-6"
      >
        ArcDeadman
      </motion.h1>

      <p className="text-gray-400 text-center max-w-xl mb-10">
        Private dead-man switch for crypto assets built on Arc Network.
        If a wallet becomes inactive, funds automatically transfer
        to a recovery wallet using encrypted intents.
      </p>

      <div className="flex gap-6">

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Create Vault
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-xl">
          Learn More
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-3xl">

        <div className="bg-[#121212] p-6 rounded-xl border border-gray-800">
          <Shield className="mb-3 text-blue-400"/>
          <h3 className="font-semibold mb-2">Private Recovery</h3>
          <p className="text-gray-400 text-sm">
            Recovery rules remain encrypted and are only executed
            when inactivity conditions trigger.
          </p>
        </div>

        <div className="bg-[#121212] p-6 rounded-xl border border-gray-800">
          <Clock className="mb-3 text-blue-400"/>
          <h3 className="font-semibold mb-2">Automated Execution</h3>
          <p className="text-gray-400 text-sm">
            Arc automation executes recovery transactions
            if your wallet becomes inactive.
          </p>
        </div>

      </div>

    </main>
  )
}