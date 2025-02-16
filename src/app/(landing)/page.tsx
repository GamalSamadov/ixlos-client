import { getAuth } from '@/shared/utils/auth/get-auth'
import Footer from '@/widgets/landing/Footer/Footer'
import Hero from '@/widgets/landing/Hero/Hero'

import styles from './Landing.module.scss'

const LandingPage = async () => {
  const user = await getAuth()
  return (
    <div className={styles.landing}>
      <Hero user={user} />
      <Footer />
    </div>
  )
}

export default LandingPage
