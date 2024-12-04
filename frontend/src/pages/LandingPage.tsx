import { Button } from "@mui/material";
import { Carousel } from "../components/Landing/Carousel";
import { Content } from "../components/Landing/Content";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel />
      <div className="h-screen w-screen bg-gradient-to-b from-white to-custom-cyan pt-10 text-center">
        <Content />

        <Button
          variant="outlined"
          sx={{
            border: "2px solid #35565E",
            color: "#35565E",
            padding: "8px 16px",
          }}
        >
          Pedir turno online
        </Button>
      </div>
    </div>
  );
};
