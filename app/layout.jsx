import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['400', '600', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Marcus Hodges - Maker of web things',
  description: 'TODO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
