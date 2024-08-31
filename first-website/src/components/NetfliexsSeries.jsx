import seriesData from "../api/seriesData.json";
const NetfliexsSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => (
        <li key={series.id}>
          <>
            <div>
              <img src={series.img_url} alt="" width="40%" height="40%" />
            </div>
            <h1>Name:{series.name}</h1>
            <h2>Rating:{series.rating}</h2>
            <p>Description:{series.description}</p>
            <p>Genre:{series.genre}</p>
            <p>Cast:{series.cast}</p>
            <a href={series.watch_url} target="_blank">
              <button>Watch on </button>
            </a>
          </>
        </li>
      ))}
    </ul>
  );
};
export default NetfliexsSeries;
