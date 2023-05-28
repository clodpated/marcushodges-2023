import Script from 'next/script';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  weight: ['400', '600', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Marcus Hodges - Maker of web things',
  description:
    'Portfolio and resume for Marcus Hodges: Front End / UI Developer and Engineering Manager',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CQ4R1YHLWD"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CQ4R1YHLWD', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
