import { ArrowUpLeftIcon } from 'lucide-react'

import { Header } from '@/widgets/shared/ui'

const AdminPage = () => {
  return (
    <>
      <Header />
      <h2 className="-mt-8 mb-8 ml-8 flex flex-row items-center gap-2 text-yellow-400">
        <ArrowUpLeftIcon size={35} />
        <span>Bu yerda sizga qo&apos;shimcha imkoniyatlar bor</span>
      </h2>
      <h1>Xush kelibsiz Admin janoblari :)</h1>
    </>
  )
}

export default AdminPage
