import "./slider.scss";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  console.log(images);
  return (
    <section className="slider">
      <div className="bgImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image: string, i: number) => (
          <img key={i} src={image} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Slider;
