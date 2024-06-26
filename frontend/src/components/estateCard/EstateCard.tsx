import { Link } from "react-router-dom";
import "./estateCard.scss";

export type EstateDataType = {
  id: number;
  title: string;
  img?: string;
  bedroom?: number;
  bathroom: number;
  price: number;
  address: string;
  latitude?: number;
  longitude?: number;
  size?: number;
  city?: string;
  school?: string;
  bus?: string;
  restaurant?: string;
  description?: string;
};

const EstateCard = (list: EstateDataType) => {
  const { id, title, img, bedroom, bathroom, price, address } = list;

  return (
    <div className="singleList">
      <Link to={`/lists/${id}`} className="imageContainer">
        <img src={img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/lists/${id}`}>{title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{address}</span>
        </p>
        <p className="price">$ {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
