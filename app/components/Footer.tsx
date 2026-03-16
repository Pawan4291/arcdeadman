"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0E1116] text-gray-400 mt-3">
      
      <div className="grid grid-cols-3 items-center px-10 py-6">

        {/* LEFT SPACE */}
        <div></div>

        {/* CENTER LINKS */}
        <div className="flex justify-center gap-8 text-sm">
          <Link
            href="https://x.com/arc"
            target="_blank"
            className="hover:text-white transition"
          >
            X
          </Link>

          <Link
            href="https://arc.network"
            target="_blank"
            className="hover:text-white transition"
          >
            Website
          </Link>

          <Link
            href="https://community.arc.network/home/forum"
            target="_blank"
            className="hover:text-white transition"
          >
            Forum
          </Link>

          <Link
            href="https://discord.gg/buildonarc"
            target="_blank"
            className="hover:text-white transition"
          >
            Discord
          </Link>
        </div>

        {/* RIGHT CREDIT */}
        <div className="flex justify-end text-sm">
          Built by{" "}
          <a
            href="https://x.com/Pawan2001564157"
            target="_blank"
            className="text-white hover:underline ml-1"
          >
            Pawan
          </a>
        </div>

      </div>

    </footer>
  )
}