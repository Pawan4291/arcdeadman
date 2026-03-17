export const CONTRACT_ADDRESS = "0x2E5C91B787F8b2BFa4063d25B5A7B46FAfC66cd1";

export const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "cancelVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recovery",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_days",
        "type": "uint256"
      }
    ],
    "name": "createVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "executeRecovery",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ping",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_days",
        "type": "uint256"
      }
    ],
    "name": "updateTimer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "vaults",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recovery",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "lastActive",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "inactivityPeriod",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];