import Image from 'next/image'

const ToggleIcon = () => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/icons/toggle.svg"
      width={35}
      height={35}
      alt="Toggle"
      draggable={false}
    />
  )
}

export default ToggleIcon
