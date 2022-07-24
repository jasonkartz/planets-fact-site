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
    <>
      <header>
        <h1>
          <span>THE PLANETS</span>
          <button
            class="mobile-menu-btn"
            onClick={() => setDisplayMenu(!displayMenu)}
          >
            <HamburgerIcon displayMenu={displayMenu} />
          </button>
        </h1>
        <nav style={{ display: displayMenu ? "block" : null }}>
          <ul>
            <li
              onClick={() => {
                setPlanet(0);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-mercury"></div>
              <span className={planet === 0 && "nav-mercury"}>MERCURY</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(1);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-venus"></div>
              <span className={planet === 1 && "nav-venus"}>VENUS</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(2);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-earth"></div>
              <span className={planet === 2 && "nav-earth"}>EARTH</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(3);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <div className="bullet bullet-mars"></div>
              <span className={planet === 3 && "nav-mars"}>MARS</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(4);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-jupiter"></span>
              <span className={planet === 4 && "nav-jupiter"}>JUPITER</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(5);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-saturn"></span>
              <span className={planet === 5 && "nav-saturn"}>SATURN</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(6);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-uranus"></span>
              <span className={planet === 6 && "nav-uranus"}>URANUS</span>
              <ChevronIcon className="chevron-icon" />
            </li>
            <li
              onClick={() => {
                setPlanet(7);
                setPlanetTopic("overview");
                setDisplayMenu(!displayMenu);
              }}
            >
              <span className="bullet bullet-neptune"></span>
              <span className={planet === 7 && "nav-neptune"}>NEPTUNE</span>
              <ChevronIcon className="chevron-icon" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <menu>
          <button
            className={
              planetTopic === "overview"
                ? `menu-${data[planet].name.toLowerCase()}`
                : "topic-btn"
            }
            onClick={() => setPlanetTopic("overview")}
          >
            <span class="menu-btn-nmbr">01</span>
            <span>OVERVIEW</span>
          </button>
          <button
            className={
              planetTopic === "structure"
                ? `menu-${data[planet].name.toLowerCase()}`
                : "topic-btn"
            }
            onClick={() => setPlanetTopic("structure")}
          >
            <span class="menu-btn-nmbr">02</span>
            <span>STRUCTURE</span>
          </button>
          <button
            className={
              planetTopic === "geology"
                ? `menu-${data[planet].name.toLowerCase()}`
                : "topic-btn"
            }
            onClick={() => setPlanetTopic("geology")}
          >
            <span class="menu-btn-nmbr">03</span>
            <span>SURFACE</span>
          </button>
        </menu>
        <section class="planet-section">
          <img
            className={`img-planet-${data[planet].name.toLowerCase()}`}
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
        </section>
        <section className="info-section">
          <h2>{data[planet].name}</h2>
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
        </section>

        <section className="stats-section">
          <div className="stat-box">
            <h3>ROTATION TIME</h3>
            <p class="stat-data">{data[planet].rotation}</p>
          </div>
          <div className="stat-box">
            <h3>REVOLUTION TIME</h3>
            <p class="stat-data">{data[planet].revolution}</p>
          </div>
          <div className="stat-box">
            <h3>RADIUS</h3>
            <p class="stat-data">{data[planet].radius}</p>
          </div>
          <div className="stat-box">
            <h3>AVERAGE TEMP.</h3>
            <p class="stat-data">{data[planet].temperature}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
