import DownloadApp from '@/components/downloadApp/DownloadApp'
import Hero from '@/components/hero/Hero'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <DownloadApp />
    </>
  )
}
