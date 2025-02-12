import Image from 'next/image'

const LogoClear = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/logo/logo-clear.png"
      width={size}
      height={size}
      alt="Logo"
      draggable={false}
    />
  )
}

export default LogoClear
