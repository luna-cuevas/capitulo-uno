import Image from 'next/image'
import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className='flex w-2/3 p-8 m-auto justify-evenly'>
      <div className='flex-col my-auto flex gap-4'>
        <button className='bg-[#FAA629] w-fit text-white font-bold tracking-[0.1rem] font-sans text-xl px-4 py-2'>
          login
        </button>
        <button className='bg-[#66C4AA] w-fit text-white font-bold tracking-[0.1rem] font-sans text-xl px-4 py-2'>
          crear cuenta
        </button>
      </div>
      <div className='relative w-[150px] h-[150px]'>
        <Image src="/images/logo.png" alt="Picture of the author" fill />
      </div>
      <div className='flex my-auto flex-col  gap-4'>
        <button className='bg-[#F47E74] w-fit text-white font-bold tracking-[0.1rem] font-sans text-xl px-4 py-2'>regala un libro</button>
        <button className='bg-[#FCBFAD] ml-auto w-fit text-white font-bold tracking-[0.1rem] font-sans text-xl px-4 py-2'>contacto</button>
      </div>
    </div>
  )
}

export default Navigation