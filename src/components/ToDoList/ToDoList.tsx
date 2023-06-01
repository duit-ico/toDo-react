import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import "./ToDoList.scss"
import { ToDo } from '../../models/todo-item'
import { Flip , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoList = (props: {todo_s: ToDo[], deleteToDo: Function, updateToDo: Function}) => {
  let flag: Boolean = false;

  const checkedList = (flag: Boolean) => {
    return props.todo_s
    .filter((item) => item.isDone !== flag)
    .map((item, idx) => {
      return (
        <ToDoListItem 
          toDoItem={item} key={idx}
          updateToDo={props.updateToDo} 
          deleteToDo={props.deleteToDo}
        />
      )
    })
  }

  return (
    <div className="todo-container">
            <ToastContainer
              position="bottom-right"
              autoClose={1500}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              transition={Flip}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
/>
      <ul className="todo-list failed">
        {checkedList(flag)}
      </ul>
      <ul className="todo-list completed">
        {checkedList(flag = true)}
      </ul>
    </div>
  )
}