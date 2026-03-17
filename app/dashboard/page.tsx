"use client"

import { useEffect, useState } from "react"
import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../lib/contract"
import Link from "next/link"
import AnimatedBackground from "../components/AnimatedBackground"
import { motion } from "framer-motion"

export default function Dashboard() {
  const { address, isConnected } = useAccount()

  const [mounted, setMounted] = useState(false)
  const [loadingTx, setLoadingTx] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { writeContractAsync } = useWriteContract()

  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "vaults",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  })

  if (!mounted) return null

  // ❌ NOT CONNECTED
  if (!isConnected) {
    return (
      <main className="relative text-white overflow-hidden flex items-center justify-center min-h-[80vh]">
        <AnimatedBackground />
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">
            Connect Your <span className="text-blue-500">Wallet</span>
          </h2>
          <p className="text-gray-400">
            Access your ArcDeadman dashboard
          </p>
        </div>
      </main>
    )
  }

  // ⏳ LOADING
  if (isLoading) {
    return (
      <main className="relative text-white overflow-hidden flex items-center justify-center min-h-[80vh]">
        <AnimatedBackground />
        Loading vault...
      </main>
    )
  }

  // 📦 DATA
  const vault = (data ?? []) as any

  const recovery =
    vault?.[1] &&
    vault[1] !== "0x0000000000000000000000000000000000000000"
      ? vault[1]
      : null

  const timerSeconds = vault?.[3] ? Number(vault[3]) : null
  const timerDays = timerSeconds ? Math.floor(timerSeconds / 86400) : null

  const isVaultCreated = !!recovery

  // 🔥 UPDATE TIMER
  const handleUpdateTimer = async () => {
    const input = prompt("Enter new timer in days:")
    if (!input) return

    const days = Number(input)

    if (isNaN(days) || days <= 0) {
      alert("Invalid number")
      return
    }

    try {
      setLoadingTx(true)

      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "updateTimer",
        args: [days], // ✅ PASS DAYS (NOT seconds)
      })

      refetch()
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingTx(false)
    }
  }

  // 🔥 CANCEL VAULT
  const handleCancelVault = async () => {
    const confirmDelete = confirm("Are you sure you want to delete vault?")
    if (!confirmDelete) return

    try {
      setLoadingTx(true)

      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "cancelVault",
        args: [],
      })

      refetch()
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingTx(false)
    }
  }

  return (
    <main className="relative text-white overflow-hidden">

      <AnimatedBackground />

      <section className="relative pt-28 pb-32 px-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              ArcDeadman <span className="text-blue-500">Dashboard</span>
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Manage your vaults and automation
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-16 items-stretch">

            {/* WALLET */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

              <div className="bg-[#0E1117]/70 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">

                <div>
                  <p className="text-gray-400 mb-4">Wallet</p>
                  <p className="break-all mb-6">{address}</p>
                </div>

                <Link href="/create-vault">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition">
                    Create Vault
                  </button>
                </Link>

              </div>
            </motion.div>

            {/* VAULT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

              <div className="bg-[#0E1117]/70 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between">

                <div>
                  <p className="text-gray-400 text-sm mb-6">Vault Status</p>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Status</span>
                    <span className={isVaultCreated ? "text-green-400" : "text-red-400"}>
                      {isVaultCreated ? "Active" : "No Vault"}
                    </span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Recovery</span>
                    <span>
                      {isVaultCreated
                        ? `${recovery.slice(0, 6)}...${recovery.slice(-4)}`
                        : "No Vault"}
                    </span>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-gray-400">Timer</span>
                    <span>
                      {isVaultCreated && timerDays !== null
                        ? `${timerDays} Days`
                        : "-"}
                    </span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={handleUpdateTimer}
                    disabled={loadingTx}
                    className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg text-sm hover:bg-blue-500/20 transition"
                  >
                    {loadingTx ? "Updating..." : "Update Timer"}
                  </button>

                  <button
                    onClick={handleCancelVault}
                    disabled={loadingTx}
                    className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg text-sm hover:bg-red-500/20 transition"
                  >
                    {loadingTx ? "Processing..." : "Cancel Vault"}
                  </button>

                  <button
                    onClick={() => refetch()}
                    className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm hover:bg-green-500/30 transition"
                  >
                    Refresh
                  </button>

                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </section>

    </main>
  )
}