import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const NetfliexsSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => (
          <>
            <SeriesCard key={series.id} series={series} />

          </>
      ))}
    </ul>
  );
};
export default NetfliexsSeries;
