import React, { useState } from 'react';
import { checkItem } from '../types/check';
const CheckList= () => {
  const [checks, setchecks] = useState<Array<checkItem>|[]>([]);
  const [title, setTitle] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  const handleTitleChange= (event:any)=> {
    setTitle(event.target.value);
  }
  const handleUrlChange= (event:any)=> {
    setUrl(event.target.value);
  }

  const handleFormSubmit=(event:any) =>{
    event.preventDefault();

    const newCheckItem = {
      id: Date.now(),
      title: title,
      isChecked:false,
      url:url
    };
    setchecks([...checks, newCheckItem]);
    
    setTitle('');
  }

  const removeItem=(id:number)=> {
    const updatedItems = checks.filter((check:checkItem)=> check.id !==id)
    setchecks(updatedItems);
  }
  

  
  return (
    <div>
      <h1>check List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={title} onChange={handleTitleChange} />
        <input type="text" value={url} onChange={handleUrlChange} />
        <button type="submit">Add check</button>
      </form>
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
