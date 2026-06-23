import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const plataformNavbar = [
    { id: 1, name: "Treinos", href: "#" },
    { id:2, name: "Nutrição", href: "#" },
    { id:3, name: "Performance", href: "#" },
    { id:4, name: "Comunidade", href: "#" },
  ];
  const suportNavbar = [
    { id:1, name: "FAQ", href: "#" },
    { id:2, name: "Termos", href: "#" },
    { id:3, name: "Privacidade", href: "#" },
    { id:4, name: "Contacto", href: "#" },
  ];

  return (
    <footer className="w-full max-h-dvh flex flex-col p-5 bg-neutral-800">
      <section className="flex items-center gap-2 mt-8 mb-2">
        <Image src="/logo2.png" alt="Logo" width={33} height={33}></Image>
        <h1 className="font-bold text-white">
          FIT<span className="text-[#DFFF00]">WEEK</span>
        </h1>
      </section>
      <section className="flex gap-30">
        <section>
          <h3 className="text-[#DFFF00] text-xs uppercase mt-8 mb-3">Plataforma</h3>
          <ul className="flex flex-col gap-1.5">
            {plataformNavbar.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-xs text-gray-300 hover:text-[#DFFF00] transition-colors">{item.name}</Link>
                </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-[#DFFF00] text-xs uppercase mt-8 mb-3">Suporte</h3>
          <ul className="flex flex-col gap-1.5">
            {suportNavbar.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-xs text-gray-300 hover:text-[#DFFF00] transition-colors">{item.name}</Link>
                </li>
            ))}
          </ul>
        </section>
        
      </section>
      <span className="border border-gray-300/30 mt-10 mb-8"></span>
      <section className="flex mb-3" id="social-medias">
        <span className="text-xs text-gray-300">©2026 Fitweek Digital Fitness. Todos os direitos reservados. Feito para quem não aceita desculpa</span>
      </section>
    </footer>
  );
}
