import Slider from "../../components/slider/Slider";
import "./estateDetailsPage.scss";

const EstateDetailsPage = () => {
  return (
    <section className="estateDetails">
      <div className="details">
        <div className="wrapper">
          <Slider />
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </section>
  );
};

export default EstateDetailsPage;
