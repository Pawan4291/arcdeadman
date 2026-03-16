"use client"

import { useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Dashboard() {

  const { address, isConnected } = useAccount()

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-10">

      <h1 className="text-3xl font-bold mb-6">
        ArcDeadman Dashboard
      </h1>

      {!isConnected ? (

        <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 max-w-xl">

          <p className="mb-4 text-gray-400">
            Connect your wallet to access your Deadman vault.
          </p>

          <ConnectButton />

        </div>

      ) : (

        <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 max-w-xl">

          <h2 className="text-xl mb-3">Wallet Connected</h2>

          <p className="text-gray-400 break-all">
            {address}
          </p>

          <div className="mt-6">

            <a href="/create-vault">
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
                Create Deadman Vault
              </button>
            </a>

          </div>

        </div>

      )}

    </main>
  )
}