import Calendar from "../components/Calendar";
import Header from "../components/Header";

export default function Page() {

  return (
    <div className="mx-auto">
      <div className="m-2">
      <Header />
      <Calendar />
      </div>
    </div>
  );
}
