import React from 'react';
import { toast } from 'react-toastify';
import { ToDo } from '../../../models/todo-item';

export const ToDoListItem = (props: {toDoItem: ToDo, deleteToDo: Function, updateToDo: Function}) => {
  const notify = (flag: number) => {
    switch (flag) {
      case 0:
        toast.warning("Задание было успешно удалено!")
        break;
      case 1:
        toast.success("Задание выполнено")
        break;
      case 2:
        toast.info("Задание не выполнено")
      break;

      default:
        break;
    }
    
  };
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button 
         className="btn-trash"
         onClick={() => {
          notify(0)
          props.deleteToDo(props.toDoItem)
        }}
        ></button>
        <button 
         className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
         onClick={() => {
          props.toDoItem.isDone ? notify(1) : notify(2)
          props.updateToDo(props.toDoItem)
        }}
        ></button>
      </div>
    </li>
  )
}
