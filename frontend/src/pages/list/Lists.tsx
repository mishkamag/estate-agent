import Filter from "../../components/filter/Filter";
import SingleList from "../../components/singleList/SingleList";
import { listData } from "../../data";
import "./lists.scss";

const Lists = () => {
  return (
    <section className="lists">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((list) => (
            <SingleList key={list.id} {...list} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </section>
  );
};

export default Lists;
