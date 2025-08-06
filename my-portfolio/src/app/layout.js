import '../app/globals.css'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'



export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio site built with Next.js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
