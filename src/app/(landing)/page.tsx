import Footer from '@/widgets/landing/Footer/Footer'
import Hero from '@/widgets/landing/Hero/Hero'

import styles from './Landing.module.scss'

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <Hero />
      <Footer />
    </div>
  )
}

export default LandingPage
