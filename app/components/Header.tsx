"use client"

import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Header() {

  return (
    <header className="w-full border-b border-gray-800 bg-[#0B0B0B] text-white">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-xl">
            ArcDeadman
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-400">

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/create-vault">
            Create Vault
          </Link>

        </nav>

        {/* Wallet */}
        <ConnectButton />

      </div>

    </header>
  )
}