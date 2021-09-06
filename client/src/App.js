import React, { useState } from "react"
import Climbs from "./components/Climbs"
import axios from "axios"
import ClimbForm from "./components/ClimbForm";

const App = () => {
  const [climbs, setClimbs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   getClimbs()
  // }, [])

const getClimbs = async () => {
try {
  let res = await axios.get("api/climbs")
  setClimbs(res.data)
} catch (err) {
 alert("could not get climbs")
  };
};


const addClimb = async (climb) => {
  try {
    let res = await axios.post("/api/climbs", climb);
    setClimbs([res.data, ...climbs])
  } catch (err) {
    alert("could not add climb")
  };
};

const deleteClimb = async (id) => {
  try {
    await axios.delete(`/api/climbs/${id}`);
    const newClimbs = climbs.filter((c) => c.id !== id);
    setClimbs(newClimbs);
  } catch (err) {
    alert("could not delete climb")
  };
};

const updateClimb = async (climb) => {
  try {
    let res = await axios.put(`api/climbs/${climb.id}`, climb)
    let newClimbs = climbs.map((c)=> (c.id === climb.id ? climb : c))
    setClimbs(newClimbs);
  } catch {
    alert("could not update climb")
  };
};


  return (
    <div>
      <h1>App</h1>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm && <ClimbForm addClimb={addClimb} />}
      <button onClick={getClimbs}>Get Climbs</button>
      <Climbs climbs={climbs} deleteClimb={deleteClimb} updateClimb={updateClimb}/>
    </div>
  );
};

export default App;
