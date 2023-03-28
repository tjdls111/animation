import React, { type Dispatch, type SetStateAction, useState } from 'react'
import { type checkItem } from '../types/check'

const CheckListForm = ({ checks, setChecks }: { checks: checkItem[] | null; setChecks: Dispatch<SetStateAction<checkItem[] | null>>
}) => {
  const [title, setTitle] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value)
  }
  const handleUrlChange = (event: any) => {
    setUrl(event.target.value)
  }

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    if (checks == null) {
      setChecks([])
    }
    const newCheckItem = {
      id: Date.now(),
      title,
      isChecked: false,
      url
    }

    if (checks == null) return
    setChecks([...checks, newCheckItem])

    setTitle('')
    setUrl('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} />
      <input type="text" value={url} onChange={handleUrlChange} />
      <button type="submit">Add check</button>
  </form>
  )
}

export default CheckListForm
