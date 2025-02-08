import Image from 'next/image'

const Icon = ({ size, variant }: { size: number; variant: string }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src={`/assets/icons/${variant}.svg`}
      width={size}
      height={size}
      alt={variant}
      draggable={false}
    />
  )
}

export default Icon
