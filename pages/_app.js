import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script';
import { GoogleAnalytics } from "nextjs-google-analytics";
import "animate.css/animate.compat.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-CQ4RS7YH44" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}