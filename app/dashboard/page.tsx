"use client"

import { useEffect, useState } from "react"
import { useAccount, useReadContract } from "wagmi"
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../lib/contract"
import Link from "next/link"

export default function Dashboard() {

  const { address, isConnected } = useAccount()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">

        {/* SAME BG AS CREATE PAGE */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#0f172a,_#000)]" />

        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Connect Your Wallet
          </h2>
          <p className="text-gray-400">
            Access your ArcDeadman dashboard
          </p>
        </div>

      </main>
    )
  }

  if (isLoading) {
    return (
      <main className="flex-1 flex items-center justify-center bg-black">
        Loading vault...
      </main>
    )
  }

  const vault = (data ?? []) as any

  const recovery =
    vault?.[1] &&
    vault[1] !== "0x0000000000000000000000000000000000000000"
      ? vault[1]
      : null

  const timerSeconds = vault?.[3] ? Number(vault[3]) : null
  const timerDays = timerSeconds ? Math.floor(timerSeconds / 86400) : null

  const isVaultCreated = !!recovery

  return (
    <main className="flex-1 relative overflow-hidden">

      {/* MATCH CREATE PAGE BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#0f172a,_#000)]" />

      <div className="max-w-6xl mx-auto px-6 py-20 min-h-[calc(100vh-140px)]">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            ArcDeadman Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Manage your vaults and automation
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* WALLET */}
          <div className="bg-[#0B1120]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 mb-2">Wallet</p>

            <p className="text-lg font-semibold break-all mb-4">
              {address}
            </p>

            <Link href="/create-vault">
              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg">
                Create New Vault
              </button>
            </Link>
          </div>

          {/* VAULT */}
          <div className="bg-[#0B1120]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-4">Your Vault</p>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className={isVaultCreated ? "text-green-400" : "text-red-400"}>
                  {isVaultCreated ? "Active" : "No Vault"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Recovery</span>
                <span className="text-sm">
                  {isVaultCreated
                    ? `${recovery.slice(0, 6)}...${recovery.slice(-4)}`
                    : "No Vault"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Timer</span>
                <span>
                  {isVaultCreated && timerDays !== null
                    ? `${timerDays} Days`
                    : "-"}
                </span>
              </div>

            </div>

            <div className="mt-6 flex gap-4">
              <button className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg">
                Update Timer
              </button>

              <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg">
                Cancel Vault
              </button>

              <button
                onClick={() => refetch()}
                className="bg-green-500 px-3 py-1 rounded"
              >
                Refresh
              </button>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}