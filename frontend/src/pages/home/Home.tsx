import SearchBar from "../../components/searchBar/SearchBar";
import { boxes } from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            {boxes.map((box) => (
              <div className="box" key={box.id}>
                <h1>{box.number}</h1>
                <h2>{box.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
