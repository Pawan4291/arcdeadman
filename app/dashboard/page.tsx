export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-10">

      <h1 className="text-3xl font-bold mb-6">
        ArcDeadman Dashboard
      </h1>

      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 max-w-xl">

        <h2 className="text-xl mb-3">Vault Status</h2>

        <p className="text-gray-400">
          No vault created yet.
        </p>

      </div>

    </main>
  )
}