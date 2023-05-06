import DownloadApp from '@/components/downloadApp/DownloadApp'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import Navbar from '@/components/navbar/Navbar'
import Newsletter from '@/components/newsletter/Newsletter'
import Quote from '@/components/quote/Quote'
import Rating from '@/components/rating/Rating'
import Video from '@/components/video/Video'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <DownloadApp />
      <Quote />
      <Rating />
      <Video />
      <Newsletter />
      <Footer />
    </>
  )
}
