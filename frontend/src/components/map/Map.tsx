import "./map.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import { Link } from "react-router-dom";
import { EstateDataType } from "../estateCard/EstateCard";

type MapProps = {
  listData: EstateDataType[];
};

const Map = ({ listData }: MapProps) => {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={6}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listData?.map((list) => (
        <Marker
          key={list.id}
          position={[list.latitude as number, list.longitude as number]}
        >
          <Popup>
            <div className="popupContainer">
              <img src={list.img} alt="" />
              <div className="textContainer">
                <Link to={`/lists/${list.id}`}>{list.title}</Link>
                <span>{list.bedroom} bedroom</span>
                <b>$ {list.price}</b>
              </div>
            </div>{" "}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
