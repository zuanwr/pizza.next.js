import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "../../public/cart.png"

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex justify-center items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 h-5'>
        <Image src="/cart.png" alt="" fill/>
        </div>
        <span >Cart(3)</span>
    </Link>
  );
}
export default CartIcon
