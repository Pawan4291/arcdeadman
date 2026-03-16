"use client"


import { useState } from "react"
import { useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function CreateVault() {

  const { isConnected } = useAccount()

  const [recoveryWallet, setRecoveryWallet] = useState("")
  const [days, setDays] = useState("")
  const [message, setMessage] = useState("")

  const handleCreate = () => {

    if (!recoveryWallet || !days) {
      alert("Please fill all fields")
      return
    }

    setMessage("Vault configuration saved (contract integration coming next)")
  }

  if (!isConnected) {
    return (
      <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center">

        <p className="mb-4 text-gray-400">
          Connect wallet to create a vault
        </p>

        <ConnectButton />

      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center p-6">

      <div className="bg-[#121212] border border-gray-800 rounded-xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6">
          Create Deadman Vault
        </h1>

        <div className="space-y-4">

          <input
            className="w-full p-3 bg-[#1a1a1a] rounded-lg"
            placeholder="Recovery Wallet Address"
            value={recoveryWallet}
            onChange={(e) => setRecoveryWallet(e.target.value)}
          />

          <input
            className="w-full p-3 bg-[#1a1a1a] rounded-lg"
            placeholder="Inactivity Time (days)"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-600 w-full py-3 rounded-lg font-semibold"
          >
            Create Vault
          </button>

          {message && (
            <p className="text-green-400 text-sm mt-4">
              {message}
            </p>
          )}

        </div>

      </div>

    </main>
  )
}