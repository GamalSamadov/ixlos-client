import Image from 'next/image'

const Logo = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/logo/logo.png"
      width={size}
      height={size}
      alt="Logo"
      draggable={false}
    />
  )
}

export default Logo
