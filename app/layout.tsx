import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Providers from "./providers"
import '@rainbow-me/rainbowkit/styles.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Providers>

          {/* FULL PAGE FLEX */}
          <div className="min-h-screen flex flex-col">

            <Header />

            {/* THIS PUSHES FOOTER DOWN */}
            <main className="flex-1 flex flex-col">
              {children}
            </main>

            <Footer />

          </div>

        </Providers>

      </body>
    </html>
  )
}