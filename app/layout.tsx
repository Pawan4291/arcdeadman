"use client"

import "./globals.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import '@rainbow-me/rainbowkit/styles.css'

import { WagmiProvider } from 'wagmi'
import { config } from './lib/web3'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
  <Header />
  {children}
  <Footer />
</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}