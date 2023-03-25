import React, { useState } from 'react';
import CheckListForm from '../components/CheckListForm';
import { checkItem } from '../types/check';
const CheckList= () => {
  const [checks, setChecks] = useState<Array<checkItem>|null>(null);


  const removeItem=(id:number)=> {
    if (!checks)return
    

    const updatedItems = checks.filter((check:checkItem)=> check.id !==id)
    setChecks(updatedItems);
  }
  

  
  return (
    <div>
      <h1>check List</h1>
      <CheckListForm checks={checks} setChecks={setChecks}/>
      <ul>
        {checks &&checks.map((check:checkItem) => (
          <li key={check.id}>{check.title}
            <a href={check.url} target="_blank" rel="noreferrer">Go to site</a>
            <button onClick={() => removeItem(check.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
