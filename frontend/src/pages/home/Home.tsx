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
            Choosing between renting and buying a home is a significant decision
            that depends on various factors. Each option has its benefits and
            drawbacks. Renting offers flexibility and less responsibility for
            maintenance, while buying provides stability and the potential for
            property appreciation.
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
