import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import "../../public/phone.png";

const Navbar = () => {
  const user = false;
  return (
    <div className="text-red-500 h-12 p-4 items-center justify-between flex border-2 border-b-red-600 uppercase md:h-24 lg:px-20 xl:px40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/Menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl font-bold md:font-bold flex-1 md:text-center">
        <Link href="/">salomee</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-3 cursor-pointer bg-orange-400 px-1 text-white rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+628 889 990</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
