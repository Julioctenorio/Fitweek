'use client'
import { Button } from "@/components/ui/Button";
import Image from "next/image";

import { useState, useEffect } from "react";
export default function Header() {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
  <header className={`
    fixed top-0 left-0 right-0 z-50
    transition-colors duration-300 ease-in-out
    ${scrollY > 5 ? 'bg-neutral-950' : 'bg-black/50'}
    flex items-center justify-between px-4 py-2 m-4 rounded-4xl
    md:m-0 md:rounded-none md:px-5 md:h-16
  `}>
    <section className="flex items-center gap-2">
      <Image src="/logo2.png" alt="Logo" width={33} height={33} />
      <h1 className="font-bold text-white">FIT<span className="text-[#DFFF00]">WEEK</span></h1>
    </section>
    <Button
      variant={"outline"}
      size={"sm"}
      className="bg-[#DFFF00] py-4 px-4 rounded-full border-none hover:bg-[#DFFF00]/80"
    >
      Começar Agora
    </Button>
  </header>
  );
}
