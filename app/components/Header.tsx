"use client"

import Link from "next/link"
import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Header() {

  return (
    <header className="w-full border-b border-gray-800 bg-[#0E1116] text-white">

      <div className="w-full flex items-center justify-between px-10 py-4">

        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center gap-3 mr-150">

          <Image
  src="/arc-logo.png"
  width={36}
  height={36}
  alt="Arc Logo"
/>

<span className="text-xl font-bold">
  ArcDeadman
</span>

        </Link>

        {/* CENTER NAV */}
        <nav className="flex gap-10 text-gray-300">

          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>

          <Link href="/create-vault" className="hover:text-white">
            Create Vault
          </Link>

        </nav>

        {/* RIGHT WALLET */}
        <div className="ml-auto">
  <ConnectButton />
</div>

      </div>

    </header>
  )
}