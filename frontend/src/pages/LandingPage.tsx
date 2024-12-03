import { Carrousel } from "../components/Landing/Carrousel";
import { Content } from "../components/Landing/Content";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-9xl">Hola soy una landing page</div>
      <Carrousel />
      <div className="h-screen w-screen bg-gradient-to-b from-white to-custom-cyan">
        <Content />

        <button className="bg-transparent border border-black">
          Pedir turno online
        </button>
      </div>
    </div>
  );
};
