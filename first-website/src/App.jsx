// import NetfliexsSeries from "./components/NetfliexsSeries";
// import "./components/Netfliexs.css"
import "./components/Netfliexs.module.css"
// import styles from "./components/Netfliexs.module.css";
import { EventHandling } from "./components/EventHandling";

export const App=()=>{
  return(
    <section className="container">
      {/* <h1 className={styles["card-heading"]}>List of best Netfliex Series</h1> */}
    {/* <NetfliexsSeries/> */}
    <EventHandling/>
  </section>
  );
}
