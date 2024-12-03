import { Carousel } from "../components/Landing/Carousel";
import { Content } from "../components/Landing/Content";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-9xl">Hola soy una landing page</div>
      <Carousel />
      <div className="h-screen w-screen bg-gradient-to-b from-white to-custom-cyan pt-10 text-center">
        <Content />

        <button className="bg-transparent border border-black ">
          Pedir turno online
        </button>
      </div>
    </div>
  );
};
