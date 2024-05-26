import { filterFormItems } from "../../data";
import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        {filterFormItems.map((item) => (
          <div className="item" key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            {item.type === "select" ? (
              <select name={item.name} id={item.id}>
                {item.options?.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.text}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={item.type}
                id={item.id}
                name={item.name}
                placeholder={item.placeholder}
              />
            )}
          </div>
        ))}
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
