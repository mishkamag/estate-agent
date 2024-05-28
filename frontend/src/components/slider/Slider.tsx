import { useState } from "react";
import "./slider.scss";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [imageIndex, setImageIndex] = useState<null | number>(null);

  const changeSlide = (direction: "left" | "right") => {
    setImageIndex((prevIndex) => {
      if (prevIndex === null) {
        return direction === "right" ? 1 : images.length - 1;
      }

      if (direction === "right") {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }

      if (direction === "left") {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }

      return prevIndex;
    });
  };

  return (
    <section className="slider">
      {imageIndex !== null && (
        <div className="fullScreenSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img
              src="/arrow.png"
              style={{ transform: "rotate(180deg)" }}
              alt=""
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}

      <div className="bgImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image: string, i: number) => (
          <img
            key={i}
            src={image}
            alt=""
            onClick={() => setImageIndex(i + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
