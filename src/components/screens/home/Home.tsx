'use client'

import { useProfile } from '@/hooks/user/useProfile'

const Home = () => {
  const { user, isLoading } = useProfile()
  return <div>{isLoading ? 'Loading... ' : JSON.stringify(user)}</div>
}

export default Home
