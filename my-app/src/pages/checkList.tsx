import React, { useState } from 'react';
import { checkItem } from '../types/check';
const CheckList= () => {
  const [checks, setchecks] = useState<Array<checkItem>|null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputChange(event:any) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event:any) {
    event.preventDefault();

    const newCheckItem = {
      id: Date.now(),
      title: inputValue,
      isChecked:false,
      url:'dummy url'
    };
    if (checks){
      setchecks([...checks, newCheckItem]);
    }
    else{
      setchecks([ newCheckItem]);
    }
    
    setInputValue('');
  }

  return (
    <div>
      <h1>check List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add check</button>
      </form>
      <ul>
        {checks &&checks.map((check:checkItem) => (
          <li key={check.id}>{check.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
