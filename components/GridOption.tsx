import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title : string
    className? : string
    image? : string
}

const GridOption = ({title,className,image} : Props) => {
  return (
    <Link className={cn('grid-option relative',className)}
        href={{
            pathname: "/search",
            query: {q: title},
        }}
    >
        <h2 className='text-xl font-bold'>{title}</h2>
        {image && (
            <Image 
                src={image}
                alt={title}
                layout='fill'
                className='object-cover opacity-40 rounded-md'
            />
        )}
    </Link>
  )
}

export default GridOption