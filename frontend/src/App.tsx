import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import "./styles/App.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
