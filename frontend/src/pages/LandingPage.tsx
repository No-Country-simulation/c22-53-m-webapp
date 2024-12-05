import { Button } from "@mui/material";
import { Carousel } from "../components/Landing/Carousel";
import { Content } from "../components/Landing/Content";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden font-lora">
      <Carousel />
      <div className="h-screen bg-gradient-to-b from-white to-custom-cyan mt-16 text-center">
        <Content />

        <Button
          variant="outlined"
          sx={{
            border: "2px solid #35565E",
            color: "#35565E",
            padding: "8px 16px",
            marginTop: "2.5rem",
            fontFamily: "Lora, serif",
            fontWeight: "bold",
          }}
          onClick={() => {
            navigate("/"); //Cambiar adelante por ruta de cards donde pedir turnos
          }}
        >
          Pedir turno online
        </Button>
      </div>
    </div>
  );
};
