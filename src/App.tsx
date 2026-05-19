import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import MenuSection from '@/components/MenuSection'
import ClassesSection from '@/components/ClassesSection'
import SignupSection from '@/components/SignupSection'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuSection />
      <ClassesSection />
      <SignupSection />
      <Footer />
    </div>
  )
}

export default App
