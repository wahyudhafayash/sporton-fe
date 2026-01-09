import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex absolute top-0 right-0 left-0 justify-between items-center gap-10 container mx-auto py-4">
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

        <div className="flex gap-12">
          <FiSearch size={24} className="cursor-pointer" />
          <div className="relative">
            <FiShoppingBag size={24} className="cursor-pointer" />
            <div className="absolute -top-1 -right-1 rounded-full w-3.5 h-3.5 bg-primary text-[10px] text-white text-center">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
