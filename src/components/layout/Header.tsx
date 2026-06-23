import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 m-4 rounded-4xl bg-black/50">
      <section className="flex items-center gap-2">
        <Image src="/logo2.png" alt="Logo" width={33} height={33}></Image>
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
