"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../../public/open.png";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 1, title: "Menu", url: "/menu" },
  { id: 1, title: "WorkingHourse", url: "/" },
  { id: 1, title: "Contact", url: "/" },
];

const Menu = () => {
  const user = false;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center ">
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full text-3xl z-10 h-[calc(100vh-6rem)] flex flex-col justify-center text-center gap-8">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login"  onClick={()=> setOpen(false)}>login</Link>
        ) : (
          <Link href="/orders"  onClick={()=> setOpen(false)}>orders</Link>
        )}
        <Link href="/cart">
          <CartIcon/>
        </Link>
      </div>
      )}
    </div>
  );
};

export default Menu;
