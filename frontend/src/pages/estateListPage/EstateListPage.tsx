import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import EstateCard from "../../components/estateCard/EstateCard";
import { listData } from "../../data";
import "./estateListPage.scss";

const EstateListPage = () => {
  return (
    <section className="estateLists">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((list) => (
            <EstateCard key={list.id} {...list} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map listData={listData} />
      </div>
    </section>
  );
};

export default EstateListPage;
