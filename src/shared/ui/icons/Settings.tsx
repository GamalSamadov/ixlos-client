import Image from 'next/image'

const Settings = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/icons/settings.svg"
      width={size}
      height={size}
      alt="Settings"
      draggable={false}
    />
  )
}

export default Settings
