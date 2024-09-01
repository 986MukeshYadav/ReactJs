export const SeriesCard=(props)=>{
    const {id,name,rating,description,genre,cast,watch_url,img_url} = props.series

return (
    <li>
    <div>
              <img src={img_url} alt="" width="40%" height="40%" />
            
            <h1>Name:{name}</h1>
            <h2>Rating:{rating}</h2>
            <p>Description:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
              <button>Watch on </button>
            </a>
     </div>
</li>

)
}