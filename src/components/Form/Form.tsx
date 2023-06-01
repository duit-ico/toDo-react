import { ChangeEvent, useState } from 'react';
import "./Form.scss";

export const Form = (props: {createNewToDo: Function}) => {
  const [text, setText] = useState<string>('')

  // JeNeRic Type - динамический тип, синтаксис React, который используется вместо стандартного event
  const formSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(text) {
      props.createNewToDo(text)
      setText('')
    }
  }
  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input 
            value={text} 
            type="text" 
            onChange={(e) => setText(e.target.value)}/>
          <button></button>
        </label>
      </form>
    </div>
  )
}