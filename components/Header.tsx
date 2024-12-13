"use client"
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useRouter from 'next/navigation'
import router from 'next/router'
import React, { FormEvent } from 'react'

const Header = () => {
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = e.currentTarget.input.value
        router.push(`/search?q=${input}`)
    }
  return (
    <div className='flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5'>
        <Link href='\' className='mb-5 md:mb-0'>
        <Image 
            src="https://imgur.com/5V4wehM.png"
            alt="walmart"
            width={150}
            height={150}
        />

        </Link>
        <form onSubmit={handleSubmit} name='input' className='flex items-center  bg-white rounded-full w-full flex-1'>
            <input type="text" placeholder='Search for a Product' className='flex-1 text-black px-4 rounded-l-full outline-none placeholder:text-sm' />
            <button type='submit'>
                <Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer' />
            </button>
        </form>
        <div className='flex space-x-5 mt-5 md:mt-0'>
            <Link href='/' className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <Grid2X2 size={20} />
                <p>Departments</p>
            </Link>
            <Link href='/' className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <LayoutGrid size={20} />
                <p>Services</p>
            </Link>
            <Link href='/' className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <Heart size={20} />
                <p className='text-xs font-extralight'>ReOrder</p>
                <p>My Items</p>
            </Link>
            <Link href='/' className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <User size={20} />
                <p className='text-xs font-extralight'>Sign In</p>
                <p>Account</p>
            </Link>
            <Link href='/' className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <ShoppingCart size={20} />
                <p className='text-xs font-extralight'>No Items</p>
                <p>$0.00</p>
            </Link>
        </div>
    </div>
  )
}

export default Header