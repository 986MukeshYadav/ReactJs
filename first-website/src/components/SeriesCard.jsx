import styles from "./Netfliexs.module.css";
import styled from 'styled-components';
export const SeriesCard=(props)=>{
    const {name,rating,description,genre,cast,watch_url,img_url} = props.series

    // const styleContent={
    //   padding:"1.2rem 2.4rem",
    //   border:"none",
    //   fontSize:"1.6rem",
    //   backgroundColor: rating >= 8.5 ? "#7dcea0": "#f7dc6f",
    //   color:"var(--h-color)",
    //   font:"bold",
    //   cursor:"pointer",
      
    // }

// const ButtonMukesh=styled.button({
//       padding:"1.2rem 2.4rem",
//       border:"none",
//       fontSize:"1.6rem",
//       backgroundColor: rating >= 8.5 ? "#7dcea0": "#f7dc6f",
//       color:"var(--h-color)",
//       font:"bold",
//       cursor:"pointer",
// })

const ButtonMukesh = styled.button`
padding: 1.2rem 2.4rem;
border: none;
font-size: 1.6rem;
background-color: ${(props) =>
  props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
color: var(--btn-color);
font-weight: bold;
cursor: pointer;
`;

  //  In styled-components, you can pass a function within the template literal to dynamically set CSS properties based on props or state.

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;




    const ratingContent= rating >= 8.5 ? styles.super_hit: styles.average

return (
    <li className={styles.card}>
    <div>
              <img  src={img_url} alt="" width="40%" height="40%" />
            {/* <div className={styles["card-content"]}> */}
            <div className="flex flex-col gap-6 px-[3.2rem] py-[1.2rem]">
            <h1>Name:{name}</h1>
            <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingContent}`}>{rating}</span>
        </Rating>
            <p className="text-orange-400 text-3xl font-bold underline">Description:{description}</p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
              {/* <button style={styleContent} className="btn">Watch on </button> */}
              <ButtonMukesh  rating={rating}>Watch on </ButtonMukesh>
            </a>
            </div>
     </div>
</li>

)
}