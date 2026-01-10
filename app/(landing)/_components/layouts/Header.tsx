"use client";
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import CardPopup from "../ui/CardPopup";

const Header = () => {
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center gap-10 container mx-auto py-3">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={127}
          height={30}
          className="pointer-events-none"
        />

        <nav className="flex gap-22.75 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#category">Category</Link>
          <Link href="#explore-product">Explore Product</Link>
        </nav>

        <div className="relative flex items-center gap-6 z-10">
          <div className="hover:bg-primary/9 p-2 rounded-full cursor-pointer">
            <FiSearch size={24} />
          </div>
          <button
            className="relative cursor-pointer hover:bg-primary/9 p-2 rounded-full"
            onClick={() => setIsCardPopupOpen(!isCardPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="absolute top-1 right-1 rounded-full w-3.5 h-3.5 bg-primary text-[10px] text-white text-center">
              3
            </div>
          </button>
          {isCardPopupOpen && <CardPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
