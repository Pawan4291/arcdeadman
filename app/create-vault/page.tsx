export default function CreateVault() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-10">

      <h1 className="text-3xl font-bold mb-6">
        Create Deadman Vault
      </h1>

      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 max-w-xl space-y-4">

        <input
          className="w-full p-3 bg-[#1a1a1a] rounded-lg"
          placeholder="Recovery Wallet Address"
        />

        <input
          className="w-full p-3 bg-[#1a1a1a] rounded-lg"
          placeholder="Inactivity Time (days)"
        />

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          Create Vault
        </button>

      </div>

    </main>
  )
}