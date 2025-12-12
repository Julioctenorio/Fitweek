import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <div className="w-full h-dvh items-center justify-center mx-auto text-center bg-[#151515]">
        <Header />
        <div className="w-90 grid grid-cols-3 justify-evenly gap-1 m-2 mx-auto sm:w-120">
          <div className="w-28 h-35 flex justify-between border rounded-xl sm:w-35">

          </div>
          <div className="w-28 h-35 flex justify-between border rounded-xl sm:w-35">

          </div>
          <div className="w-28 h-35 flex justify-between border rounded-xl sm:w-35">

          </div>
        </div>
      </div>
    </>
  );
}
