import { DoctorCard } from "../components/ShiftMedical/DoctorCard";
import { SearchBar } from "../components/ShiftMedical/SearchBar";

export const ShiftMedical = () => {
  return (
    <div>
      <section id="search-bar" className="">
        <SearchBar />
      </section>
      <section id="doctors-cards">
        <div>Aqui irian las cards</div>
        <DoctorCard />
      </section>
    </div>
  );
};
