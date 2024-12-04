import { Button } from "@mui/material";
import { Carousel } from "../components/Landing/Carousel";
import { Content } from "../components/Landing/Content";

export const LandingPage = () => {
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
        >
          Pedir turno online
        </Button>
      </div>
    </div>
  );
};
