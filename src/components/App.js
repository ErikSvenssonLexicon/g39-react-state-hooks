import { useState } from "react";
import People from "./People";
import PersonForm from "./PersonForm";

const App = (props) => {

  const [people, setPeople] = useState([]);

  const handleAddPerson = (person) => {    
    setPeople([...people, person]);        
  }

  const handleDeletePerson = (id) => {
    setPeople(prevState => prevState.filter(person => person.id !== id))
  }

  return (
    <div className="container">
      <PersonForm handleAddPerson={handleAddPerson} />
      <People people={people} handleDeletePerson={handleDeletePerson}/>    
    </div>
  );
};

export default App;
