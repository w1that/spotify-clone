import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href={'/'} passHref>
    <div className='flex items-center cursor-pointer pl-2'>
    <Image src='/logo.png' alt='logo' width={42} height={42} />
    <h1 className='text-white font-gotham text-2xl align-bottom my-0 ml-1' >Spotify</h1>
    </div>
    </Link>
  )
}
