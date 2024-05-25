import { useState } from "react";
import "./searchBar.scss";

type BtnType = "Buy" | "Rent";

type iBtn = {
  type: BtnType;
  location: string;
  minPrice: number;
  maxPrice: number;
};

const SearchBar = () => {
  const [buttonType, setButtonType] = useState<iBtn>({
    type: "Buy",
    location: "",
    maxPrice: 0,
    minPrice: 0,
  });

  const switchBtnType = (val: BtnType) => {
    setButtonType((prev) => ({ ...prev, type: val }));
  };

  return (
    <section className="searchBar">
      <div className="buttons">
        <button
          className={buttonType.type === "Buy" ? "active" : ""}
          onClick={() => {
            switchBtnType("Buy");
          }}
        >
          Buy
        </button>
        <button
          className={buttonType.type === "Rent" ? "active" : ""}
          onClick={() => {
            switchBtnType("Rent");
          }}
        >
          Rent
        </button>
      </div>
      <form action="" className="form">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button className="search">
          <img src="search.png" alt="" />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
