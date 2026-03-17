export const CONTRACT_ADDRESS = "0x708BE4b9306ff2CDdb1f682Ad1b403776BE1f471";

export const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_recovery", "type": "address" },
      { "internalType": "uint256", "name": "_days", "type": "uint256" }
    ],
    "name": "createVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "vaults",
    "outputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "recovery", "type": "address" },
      { "internalType": "uint256", "name": "lastActive", "type": "uint256" },
      { "internalType": "uint256", "name": "inactivityPeriod", "type": "uint256" },
      { "internalType": "bool", "name": "executed", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]