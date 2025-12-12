import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default function Principal() {
const router = useRouter();
  return (
    <>
      <div className="flex w-28 h-28 border rounded-full items-center justify-center bg-green-400 border-none">
        <img
          src="haltere.png"
          alt="Dunbell design"
          className="w-16 h-16 rotate-45"
        />
      </div>
      <div>
        <h1 className="uppercase text-4xl mt-2 xl:text-5xl text-white" onClick={() => router.push("/")}>
          Fitweek
        </h1>
      </div>
    </>
  );
}
