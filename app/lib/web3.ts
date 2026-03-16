import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'viem'

const arcTestnet = {
  id: 11155111,
  name: "Arc Testnet",
  network: "arc-testnet",
  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
  },
  rpcUrls: {
    default: { http: ["https://rpc.arc.network"] },
  },
}

export const config = getDefaultConfig({
  appName: "ArcDeadman",
  projectId: "arcdeadman",
  chains: [arcTestnet],
  transports: {
    [arcTestnet.id]: http(),
  },
})