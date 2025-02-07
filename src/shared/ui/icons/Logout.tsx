import Image from 'next/image'

const LogoutIcon = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/icons/sign-out.svg"
      width={size}
      height={size}
      alt="Logout"
      draggable={false}
    />
  )
}

export default LogoutIcon
