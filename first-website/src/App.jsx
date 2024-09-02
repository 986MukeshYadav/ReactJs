import NetfliexsSeries from "./components/NetfliexsSeries";
import "./components/Netfliexs.css"

export const App=()=>{
  return(
    <section className="container">
      <h1 className="card-heading">List of best Netfliex Series</h1>
    <NetfliexsSeries/>
  </section>
  );
}
