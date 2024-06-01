import "./list.scss";
import { listData } from "../../data";
import EstateCard from "../estateCard/EstateCard";

function List() {
  return (
    <div className="lists">
      {listData.map((list) => (
        <EstateCard key={list.id} {...list} />
      ))}
    </div>
  );
}

export default List;
