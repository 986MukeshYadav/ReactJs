function Profile(){
    return(
        <>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
        name="Mukesh"
        age={23}
        greeting={
          <div>
            <strong>Hi Mukesh, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Ranjan"
        age={22}
        greeting={
          <div>
            <strong>Hi Ranjan, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
        </>
    )
}

export default Profile;

// Create a custom React component named "ProfileCard" that accepts the following props:

function ProfileCard(props){
    const {name, age, greeting,children} = props;
    return(
        <>
            <h1>Name:{name}</h1>
            <p>Age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>

        </>
    )
}