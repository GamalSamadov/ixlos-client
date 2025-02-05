import Image from 'next/image'

const GoogleIcon = () => {
  return (
    <Image
      src={'/assets/icons/google.svg'}
      width={20}
      height={20}
      alt="google"
      draggable={false}
    />
  )
}

export default GoogleIcon
