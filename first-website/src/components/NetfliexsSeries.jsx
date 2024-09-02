import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const NetfliexsSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((series) => (
          <>
            <SeriesCard key={series.id} series={series} />

          </>
      ))}
    </ul>
  );
};
export default NetfliexsSeries;
