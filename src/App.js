import data from "./data.json";
function App() {
  return (
    <>
      <header></header>
      <img src={data[0].images.planet} alt="mercury" />
      <h1>{data[0].name}</h1>
      <p>{data[0].overview.content}</p>
      <cite>
        Source:{" "}
        <a href={data[0].overview.source} target="_blank" rel="noreferrer">
          Wikipedia
        </a>
      </cite>
    </>
  );
}

export default App;
