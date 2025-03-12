"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar: React.FC = () => {
  const router = useRouter();



  return (
    <nav className="flex items-center py-4 px-10 bg-white/95 shadow-sm sticky top-0 z-50">
      {/* Left Section: Logo */}
      <div className="flex-1">
        <img src="/static/assets/img/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex-1">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/doctors">Doctors</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>

   
    </nav>
  );
};

export default Navbar;
