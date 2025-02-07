import Image from 'next/image'

const OpenBook = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/icons/book-open-gray.svg"
      width={size}
      height={size}
      alt="Book"
      draggable={false}
    />
  )
}

export default OpenBook
