import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
  };

  const handleNameChange = (e) => {
    setPerson({...person, name:e.target.value})
  };



  return (
    <>
      <h1>{person.name}</h1>
      <Input
        label="Person's name"
        value={person.name}
        onChange={handleNameChange}/>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
