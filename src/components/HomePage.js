import React from "react";
import ImageSlider from "./ImageSlider";
import Images from "./Images";

const HomePage = () => {
  return (
    <div>
      <ImageSlider images={Object.values(Images)} />
    </div>
  );
};

export default HomePage;