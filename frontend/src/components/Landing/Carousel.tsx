import React from "react";
import Slider from "react-slick";
import { Box, Button } from "@mui/material";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Box
          key={index}
          className="w-screen h-64 flex justify-center items-center overflow-hidden"
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            margin: "auto",
          }}
        >
          <img
            src={`https://via.placeholder.com/400x300?text=Slide+${index}`}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </Box>
      ))}
    </Slider>
  );
};
