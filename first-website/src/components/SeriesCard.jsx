export const SeriesCard=(props)=>{
    const {name,rating,description,genre,cast,watch_url,img_url} = props.series

    const styleContent={
      padding:"1.2rem 2.4rem",
      border:"none",
      fontSize:"1.6rem",
      backgroundColor: rating >= 8.5 ? "#7dcea0": "#f7dc6f",
      color:"var(--h-color)",
      font:"bold",
      cursor:"pointer",
      
    }

    const ratingContent= rating >= 8.5 ? "super_hit": "average"

return (
    <li className="card">
    <div>
              <img  src={img_url} alt="" width="40%" height="40%" />
            <div className="card-content">
            <h1>Name:{name}</h1>
            <h2>Rating:<span className={`rating ${ratingContent}`}>{rating} </span></h2>
            <p>Description:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
              <button style={styleContent} className="btn">Watch on </button>
            </a>
            </div>
     </div>
</li>

)
}