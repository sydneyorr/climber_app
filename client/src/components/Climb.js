import React, { useState } from "react"
import ClimbForm from "./ClimbForm";

const Climb = (props) => {

  const [showForm, setShowForm] = useState(false)
  const {
    name,
    rating,
    location,
    id,
    deleteClimb,
    updateClimb,
  } = props;

  return (
    <div style={{ margin: "10px", border: "3px solid blue" }}>
      <h1>{id} - {name}</h1>
        <p>{rating}</p>
        <p>{location}</p>
        <button onClick={()=>deleteClimb(id)}>Delete Climb</button>
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Close" : "Edit"}</button>
        {showForm && <ClimbForm 
        updateClimb={updateClimb}
        id={id}
        name={name}
        rating={rating}
        location={location}
        />}
    </div>
  );
};

export default Climb