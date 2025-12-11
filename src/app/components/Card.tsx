/* eslint-disable @next/next/no-img-element */
export interface CardProps {
  variant?: "small" | "default";
  title: string;
  subtitle?: string;
  extra?: string;
  icon?: string;
  number?: number;
}

export default function Card({ variant = "default", title, subtitle, extra, icon, number }: CardProps): React.ReactNode {
  return (
    <div
      className={`w-75 mx-auto transition hover:scale-105 hover:shadow-xl border border-neutral-800 hover:border-green-500 rounded-2xl p-4 bg-neutral-900 ${
        variant === "small"
          ? "flex h-25 px-4 items-center"
          : "h-48 mx-5 my-2 md:mx-3 md:my-3 xl:h-56"
      }`}
    >
      {/* Ícone / Imagem / Número */}
      {icon && (
        <div className="flex w-12 h-12 bg-green-400 items-center justify-center rounded-lg">
          <img src={icon} alt="icon" className="w-8 h-8" />
        </div>
      )}

      {number && (
        <div className="flex w-12 h-12 bg-gray-800 items-center justify-center rounded-full mx-auto mt-3">
          <p className="text-green-400 text-2xl">{number}</p>
        </div>
      )}

      {!icon && !number && (
        <div className="w-15 h-15 border mr-2 bg-[#414141] border-none rounded-xl flex items-center justify-center text-white">
          img
        </div>
      )}

      {/* Conteúdo */}
      <div className={variant === "small" ? "flex-col text-left ml-2" : "mt-5"}>
        <h2 className={variant === "small" ? "text-md" : "text-lg xl:text-xl text-white my-2"}>{title}</h2>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        {extra && (
          <p className={`${variant === "small" ? "text-xs pt-0.5 text-green-300" : "text-gray-400 xl:text-md"}`}>{extra}</p>
        )}
      </div>
    </div>
  );
}
