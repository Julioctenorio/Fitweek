import Calendar from "../components/Calendar";
import Header from "../components/Header";

export default function Page() {

  return (
    <div className="mx-auto bg-neutral-950">
      <div className="m-2">
      <Header />
      <Calendar />
      </div>
    </div>
  );
}
