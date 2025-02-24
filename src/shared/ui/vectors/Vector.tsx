import Image from 'next/image'

export const Vector = ({
  size,
  variant,
}: {
  size: number
  variant: string
}) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src={`/assets/vectors/${variant}.svg`}
      width={size}
      height={size}
      alt="Logo"
      draggable={false}
    />
  )
}
