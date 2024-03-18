import "./App.css";
import { useState } from "react";
import { StyledUl, StyledInput } from "./styles";

function App() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((_prevCar) => [...cars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((prevCar) => prevCar.filter((element, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List Of Car Objects</h1>
      <StyledUl>
        {cars.map((element, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {element.year} {element.make} {element.model}
          </li>
        ))}
      </StyledUl>
      <StyledInput type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <StyledInput
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <StyledInput
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}

export default App;
