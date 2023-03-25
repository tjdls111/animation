import React, { useState } from 'react';

function CheckList() {
  const [checks, setchecks] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Do laundry' },
    { id: 3, text: 'Clean the house' }
  ]);

  return (
    <div>
      <h1>check List</h1>
      <ul>
        {checks.map(check => (
          <li key={check.id}>{check.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;