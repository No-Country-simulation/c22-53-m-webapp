import { Carrousel } from "../components/Landing/Carrousel";
import { Content } from "../components/Landing/Content";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-9xl">Hola soy una landing page</div>
      <Carrousel />
      <Content />
      <button className="bg-red-900">Pedir turno online</button>
    </div>
  );
};
