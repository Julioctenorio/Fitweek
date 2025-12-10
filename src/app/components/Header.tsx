export default function Header() {
  return (
    <>
      <div className="flex w-28 h-28 border rounded-full items-center justify-center bg-green-400 border-none xl:w-48 xl:h-48">
        <img
          src="haltere.png"
          alt="Dunbell design"
          className="w-16 h-16 rotate-45 xl:w-20 xl:h-20"
        />
      </div>
      <div>
        <h1 className="uppercase text-4xl my-5 xl:text-9xl text-white">
          Fitweek
        </h1>
        <p className="mx-16 text-gray-400">
          Organize seus treinos semanais de forma simpels e eficaz
        </p>
      </div>
    </>
  );
}
