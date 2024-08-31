export const App=()=>{
  // return ([<Netfliex key="1"/>,<Netfliex key="2"/>]
  return(
    <>
  <Netfliex/>
  <Netfliex/>
  <Netfliex/>
  <Netfliex/>
  <Netfliex/>
  <Netfliex/>
  </>
  );
}

const Netfliex=()=>{
  const name="Queen of Nepal";
  // const rating=8.5;
  const description="Queen of Nepal is a 2020 Indian Hindi-language romantic drama film directed by Rahul Kapoor and produced by Kiran Kapoor and Ashok Kapoor" 
  let age = 16;

 let canWatch = "Not Avialable";
  if(age >= 18) canWatch = "Watch Now";

//  const canWatch=()=>{
//   if(age >= 18) return "Watch Now";
//   return "Not Available";
//  }

  const movieGenre=()=>{
    const genre="Comedy Movie";
    return genre;
  }
  // if(age < 18 ){
  //   return (
  //     <div>
  //     <div>
  //       <img src="img.png" alt="" width="40%" height="40%"/>
  //     </div>
  //    <h1>Name:{name}</h1>   {/*Dynamic value using value */}
  //   <h2>Rating:{5+8}</h2>   {/*Dynamic value using Expression */}
  //   <p>Content:{description}</p>
  //   <p>Genre:{movieGenre()}</p>  {/*Dynamic value using function */}
  //   <button>Not Avaliable</button>
  //   </div>
  //   )
  // }

  return(
    <div>
    <div>
      <img src="img.png" alt="" width="40%" height="40%"/>
    </div>
   <h1>Name:{name}</h1>   {/*Dynamic value using value */}
  <h2>Rating:{5+8}</h2>   {/*Dynamic value using Expression */}
  <p>Content:{description}</p>
  <p>Genre:{movieGenre()}</p>  {/*Dynamic value using function */}

  {/* <button>{age >= 18 ? "Watch Now":"Not Avaliable"}</button> */}

    {/* <button>{canWatch()}</button> */}

    <button>{canWatch}</button>
  </div>
  )
}