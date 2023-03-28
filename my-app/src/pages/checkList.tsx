import React, { useState } from 'react'
import CheckListForm from '../components/CheckListForm'
import { type checkItem } from '../types/check'
const CheckList = () => {
  const [checks, setChecks] = useState<checkItem[] | null>(null)

  const removeItem = (id: number) => {
    if (checks == null) return

    const updatedItems = checks.filter((check: checkItem) => check.id !== id)
    setChecks(updatedItems)
  }

  return (
    <div>
      <h1>check List</h1>
      <CheckListForm checks={checks} setChecks={setChecks}/>
      <ul>
        {(checks != null) && checks.map((check: checkItem) => (
          <li key={check.id}>{check.title}
            <a href={check.url} target="_blank" rel="noreferrer">Go to site</a>
            <button onClick={() => { removeItem(check.id) }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CheckList
