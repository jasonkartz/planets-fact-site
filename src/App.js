import data from "./data.json";
function App() {
  return (
    <>
      <header>
        <h2>THE PLANETS</h2>
        <nav>
          <ul>
            <li>
              <div className="bullet color-mercury"></div>
              <span>MERCURY</span>
            </li>
            <li>
              <div className="bullet color-venus"></div>
              <span>VENUS</span>
            </li>
            <li>
              <div className="bullet color-earth"></div>
              <span>EARTH</span>
            </li>
            <li>
              <div className="bullet color-mars"></div>
              <span>MARS</span>
            </li>
            <li>
              <span className="bullet color-jupiter"></span>
              <span>JUPITER</span>
            </li>
            <li>
              <span className="bullet color-saturn"></span>
              <span>SATURN</span>
            </li>
            <li>
              <span className="bullet color-uranus"></span>
              <span>URANUS</span>
            </li>
            <li>
              <span className="bullet color-neptune"></span>
              <span>NEPTUNE</span>
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
          <img src={data[0].images.planet} alt="mercury" />
          <h1>{data[0].name}</h1>
          <p>{data[0].overview.content}</p>
          <cite>
            Source:{" "}
            <a href={data[0].overview.source} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </cite>
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
    </>
  );
}

export default App;
