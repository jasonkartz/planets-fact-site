import data from "./data.json";
import HamburgerIcon from "./HamburgerIcon";
import SourceIcon from "./SourceIcon";
import ChevronIcon from "./ChevronIcon";
import { useState } from "react";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [planet, setPlanet] = useState(0);
  const [planetTopic, setPlanetTopic] = useState("overview");
  return (
    <div className="container">
      <header>
        <h2>
          <span>THE PLANETS</span>{" "}
          <button onClick={() => setDisplayMenu(!displayMenu)}>
            <HamburgerIcon displayMenu={displayMenu} />
          </button>
        </h2>
        <nav style={{ display: displayMenu ? "block" : "none" }}>
          <ul>
            <li
              onClick={() => {
                setPlanet(0);
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-mercury"></div>
              <span>MERCURY</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(1);
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-venus"></div>
              <span>VENUS</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(2);
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-earth"></div>
              <span>EARTH</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(3);
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-mars"></div>
              <span>MARS</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(4);
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-jupiter"></span>
              <span>JUPITER</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(5);
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-saturn"></span>
              <span>SATURN</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(6);
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-uranus"></span>
              <span>URANUS</span>
              <ChevronIcon />
            </li>
            <li
              onClick={() => {
                setPlanet(7);
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-neptune"></span>
              <span>NEPTUNE</span>
              <ChevronIcon />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="info-section">
          <menu>
            <button onClick={() => setPlanetTopic("overview")}>OVERVIEW</button>
            <button onClick={() => setPlanetTopic("structure")}>
              STRUCTURE
            </button>
            <button onClick={() => setPlanetTopic("geology")}>SURFACE</button>
          </menu>
          <div className="img-planet-container">
            <img
              className="img-planet"
              src={
                planetTopic === "overview" || planetTopic === "geology"
                  ? data[planet].images.overview
                  : data[planet].images[planetTopic]
              }
              alt="mercury"
            />
            {planetTopic === "geology" && (
              <img
                className="img-geology"
                src={data[planet].images.geology}
                alt={`${planet} surface`}
              />
            )}
          </div>
          <div className="info-text">
            <h1>{data[planet].name}</h1>
            <p>{data[planet][planetTopic].content}</p>
            <cite>
              Source :{" "}
              <a
                href={data[planet][planetTopic].source}
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>{" "}
              <a
                href={data[planet][planetTopic].source}
                target="_blank"
                rel="noreferrer"
              >
                <SourceIcon />
              </a>
            </cite>
          </div>
        </section>
        <section className="stats-section">
          <div className="stat-box">
            <h4>ROTATION TIME</h4>
            <h2>{data[planet].rotation}</h2>
          </div>
          <div className="stat-box">
            <h4>REVOLUTION TIME</h4>
            <h2>{data[planet].revolution}</h2>
          </div>
          <div className="stat-box">
            <h4>RADIUS</h4>
            <h2>{data[planet].radius}</h2>
          </div>
          <div className="stat-box">
            <h4>AVERAGE TEMP.</h4>
            <h2>{data[planet].temperature}</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
