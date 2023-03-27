import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CQ4RS7YH44', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
