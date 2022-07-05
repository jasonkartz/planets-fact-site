import data from "./data.json";
import HamburgerIcon from "./HamburgerIcon";
function App() {
  return (
    <div className="container">
      <header>
        <h2>
          <span>THE PLANETS</span> <HamburgerIcon />
        </h2>
        <nav>
          <ul>
            <li>
              <div className="bullet bullet-mercury"></div>
              <span>MERCURY</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <div className="bullet bullet-venus"></div>
              <span>VENUS</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <div className="bullet bullet-earth"></div>
              <span>EARTH</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <div className="bullet bullet-mars"></div>
              <span>MARS</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <span className="bullet bullet-jupiter"></span>
              <span>JUPITER</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <span className="bullet bullet-saturn"></span>
              <span>SATURN</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <span className="bullet bullet-uranus"></span>
              <span>URANUS</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
            <li>
              <span className="bullet bullet-neptune"></span>
              <span>NEPTUNE</span>
              <img src="./assets/icon-chevron.svg" alt="chevron-icon" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="info-section">
          <menu>
            <button>Overview</button>
            <button>Structure</button>
            <button>Surface</button>
          </menu>
          <img class="img-planet" src={data[0].images.planet} alt="mercury" />
          <div class="info-text">
            <h1>{data[0].name}</h1>
            <p>{data[0].overview.content}</p>
            <cite>
              Source :{" "}
              <a
                href={data[0].overview.source}
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>{" "}
              <img src="./assets/icon-source.svg" alt="source-icon" />
            </cite>
          </div>
        </section>
        <section className="stats-section">
          <div className="stat-box">
            <h4>ROTATION TIME</h4>
            <h2>{data[0].rotation}</h2>
          </div>
          <div className="stat-box">
            <h4>REVOLUTION TIME</h4>
            <h2>{data[0].revolution}</h2>
          </div>
          <div className="stat-box">
            <h4>RADIUS</h4>
            <h2>{data[0].radius}</h2>
          </div>
          <div className="stat-box">
            <h4>AVERAGE TEMP.</h4>
            <h2>{data[0].temperature}</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
