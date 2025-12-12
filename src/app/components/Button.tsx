type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  width?: string;
};

export default function Button(props: ButtonProps) {
  const { text, width = "w-60", className, ...rest } = props;

  return (
    <>
      <button
        className={`${width} h-13 inline-block rounded-xl border border-none bg-green-400 px-8 py-3 text-lg font-medium text-neutral-800 transition hover:scale-110 hover:shadow-xl ${
          className ?? ""
        }`}
        {...rest}
      >
        {text}
      </button>
    </>
  );
}
