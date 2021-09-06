import React from "react"
import Climb from "./Climb"

const Climbs = ({climbs, deleteClimb, updateClimb}) => {

  return (
    <div>
      <h1>Climbs</h1>
      {climbs.map((climb) => (
        <Climb key={climb.id} {...climb} deleteClimb={deleteClimb} updateClimb={updateClimb} />
      ))}
    </div>
  );
};

export default Climbs
