"use client"

import { useAccount, useWriteContract, useChainId, useSwitchChain } from "wagmi"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedBackground from "../components/AnimatedBackground"
import { useRouter } from "next/navigation"
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../lib/contract"

export default function CreateVault() {

  const { address, isConnected } = useAccount()
  const router = useRouter()
  const { writeContractAsync } = useWriteContract()

  const chainId = useChainId()
  console.log("CHAIN ID:", chainId)

  const { switchChainAsync } = useSwitchChain()

  const [recovery, setRecovery] = useState("")
  const [days, setDays] = useState(30)

  // 🔥 NEW STATUS SYSTEM
  const [status, setStatus] = useState("idle")
  // idle | waiting | processing | success | error

  const isValidAddress = recovery.startsWith("0x") && recovery.length === 42
  const isValidDays = days > 0

  const handleCreateVault = async () => {
    try {
      if (!isConnected) return

      // 🔥 Step 1: Switch network if needed
      if (chainId !== 5042002) {
        await switchChainAsync({ chainId: 5042002 })
        return
      }

      // 🔥 Step 2: Waiting for wallet confirm
      setStatus("waiting")

      const tx = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "createVault",
        args: [recovery, days]
      })

      console.log("TX:", tx)

      // 🔥 Step 3: Processing
      setStatus("processing")

      // 🔥 Temporary wait (we will replace later with real confirmation)
      setTimeout(() => {
        setStatus("success")

        // 🔥 Redirect after success
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)

      }, 4000)

    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      <AnimatedBackground />

      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 text-center">

        <div className="max-w-4xl mx-auto mb-16">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Create Your <span className="text-blue-500">Deadman Vault</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Secure your crypto assets with automated recovery.
            Set inactivity rules and let Arc handle execution privately.
          </p>

        </div>

        {/* BOXES */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="h-full bg-[#0E1117]/80 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl">

              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">
                  Recovery Wallet
                </label>

                <input
                  type="text"
                  placeholder="0x..."
                  value={recovery}
                  onChange={(e) => setRecovery(e.target.value)}
                  className="w-full bg-[#0B0F17] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
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
                  className="w-full bg-[#0B0F17] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* 🔥 IMPROVED BUTTON */}
              <button
                onClick={handleCreateVault}
                disabled={!isConnected || !isValidAddress || !isValidDays || status !== "idle"}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition
                  ${status === "success"
                    ? "bg-green-500"
                    : status === "processing" || status === "waiting"
                      ? "bg-yellow-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
              >
                {status === "idle" && (
                  !isConnected
                    ? "Connect Wallet First"
                    : chainId !== 5042002
                      ? "Switch to Arc Network"
                      : "Create Vault"
                )}

                {status === "waiting" && "Waiting for wallet..."}
                {status === "processing" && "Processing transaction..."}
                {status === "success" && "Vault Created ✅"}
                {status === "error" && "Try Again ❌"}
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="h-full bg-[#0E1117]/80 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl relative overflow-hidden">

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full"></div>

              <p className="text-gray-400 text-sm mb-6">
                Vault Preview
              </p>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Owner</span>
                <span>
                  {address
                    ? `${address.slice(0, 6)}...${address.slice(-4)}`
                    : "Not Connected"}
                </span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Recovery</span>
                <span>{recovery || "0x..."}</span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-400">Timer</span>
                <span>{days} Days</span>
              </div>

              <div className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-sm">
                Automation Ready
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TRUST STRIP */}
      <div className="border-t border-gray-800 py-10 px-6">

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="hover:scale-105 transition">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-400 text-sm">On-chain Execution</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-2xl font-bold">Private</p>
            <p className="text-gray-400 text-sm">Encrypted Intents</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-2xl font-bold">No Custody</p>
            <p className="text-gray-400 text-sm">You Own Funds</p>
          </div>

          <div className="hover:scale-105 transition">
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-gray-400 text-sm">Automation</p>
          </div>

        </div>

      </div>

    </main>
  )
}