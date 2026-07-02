import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const plataformNavbar = [
    { id: 1, name: "Treinos", href: "#" },
    { id: 2, name: "Nutrição", href: "#" },
    { id: 3, name: "Performance", href: "#" },
    { id: 4, name: "Comunidade", href: "#" },
  ];
  const suportNavbar = [
    { id: 1, name: "FAQ", href: "#" },
    { id: 2, name: "Termos", href: "#" },
    { id: 3, name: "Privacidade", href: "#" },
    { id: 4, name: "Contacto", href: "#" },
  ];

  return (
    <footer className="w-full bg-linear-to-b from-neutral-950 to-neutral-900 border-t border-[#DFFF00]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <section className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="relative group">
            <Image 
              src="/logo2.png" 
              alt="Fitweek Logo" 
              width={38} 
              height={38} 
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            FIT<span className="text-[#DFFF00]">WEEK</span>
          </h1>
          <span className="ml-auto hidden sm:block text-[10px] text-[#DFFF00]/40 font-mono tracking-widest uppercase">
            #SemDesculpas
          </span>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <section className="space-y-4">
            <h3 className="text-[#DFFF00] text-xs font-semibold uppercase tracking-wider">
              Plataforma
            </h3>
            <ul className="space-y-2.5">
              {plataformNavbar.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#DFFF00] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-[#DFFF00] text-xs font-semibold uppercase tracking-wider">
              Suporte
            </h3>
            <ul className="space-y-2.5">
              {suportNavbar.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#DFFF00] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-[#DFFF00] text-xs font-semibold uppercase tracking-wider">
              Fique em forma
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Junte-se a Fitweek e comece a alcancar seus objetivos Fitness.
            </p>
            <button className="px-4 py-2 bg-[#DFFF00] text-black text-sm font-medium rounded-lg hover:bg-[#d4f000] transition-all duration-300 hover:shadow-lg hover:shadow-[#DFFF00]/20 hover:-translate-y-0.5">
              Começar agora
            </button>
          </section>
        </section>

        <div className="my-10 border-t border-gray-800/50"></div>

        <section className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 <span className="text-[#DFFF00]/70 font-medium">Fitweek</span> Digital Fitness. 
            Todos os direitos reservados.
          </span>
          <span className="text-[10px] text-gray-600 italic text-center sm:text-right">
            Feito para quem não aceita desculpas
          </span>
        </section>
      </div>
    </footer>
  );
}