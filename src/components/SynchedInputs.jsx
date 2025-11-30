import { useState } from 'react';

export default function SyncedInputs() {

const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" onChange={handleChange} text={text} />
      <Input label="Second input" onChange={handleChange} text={text}/>
    </>
  );
}

function Input({ label, onChange, text }) {
  


  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}
