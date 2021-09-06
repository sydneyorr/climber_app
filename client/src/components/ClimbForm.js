import React, { useState } from "react"

const ClimbForm = (props) => {

  const [name, setName] = useState(props.name ? props.name : "")
  const [rating, setRating] = useState(props.rating ? props.rating : "")
  const [location, setLocation] = useState(props.location ? props.location : "")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.updateClimb({ id: props.id, name, rating, location})
    } else {
    props.addClimb({ name, rating, location })
    setName("")
  }};

  return (
    <div>
      <h1>{props.id ? "Edit" : "New Climb"}</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
          <input 
          value={name}
          onChange={(e)=>{setName(e.target.value);
            }} />
        <p>Rating:</p>
          <input 
          value={rating}
          onChange={(e)=>{setRating(e.target.value);
          }}
          />
        <p>Location:</p>
          <input 
           value={location}
           onChange={(e)=>{setLocation(e.target.value);
           }}
           />
           <button>{props.id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ClimbForm