/* eslint-disable @next/next/no-img-element */
export default function Header() {
  // const [step, setStep] = useState(1);

  return (
    <>
      <div className="flex w-28 h-28 border rounded-full items-center justify-center bg-green-400 border-none">
        <img
          src="haltere.png"
          alt="Dunbell design"
          className="w-16 h-16 rotate-45 xl:w-20 xl:h-20"
        />
      </div>
      <div>
        <h1 className="uppercase text-4xl my-2 xl:text-6xl text-white">
          Fitweek
        </h1>
      </div>
    </>
  );
}
