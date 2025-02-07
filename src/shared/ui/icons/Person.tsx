import Image from 'next/image'

const Person = ({ size }: { size: number }) => {
  return (
    <Image
      style={{ userSelect: 'none' }}
      src="/assets/icons/person.svg"
      width={size}
      height={size}
      alt="Person"
      draggable={false}
    />
  )
}

export default Person
