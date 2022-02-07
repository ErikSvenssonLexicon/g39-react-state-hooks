import { useState, useEffect, useCallback } from "react";
import People from "./People";
import PersonForm from "./PersonForm";
import Spinner from "./ui/Spinner";

const App = (props) => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const findAllPeople = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/people");

      const data = await response.json();

      setPeople(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  //
  useEffect(() => {
    findAllPeople();
  }, [findAllPeople]);

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  const handleDeletePerson = (id) => {
    setPeople((prevState) => prevState.filter((person) => person.id !== id));
  };

  return (
    <div className="container">
      <PersonForm handleAddPerson={handleAddPerson} />
      {!isLoading && (
        <People people={people} handleDeletePerson={handleDeletePerson} />
      )}
      {isLoading && <Spinner/>}
    </div>
  );
};

export default App;
