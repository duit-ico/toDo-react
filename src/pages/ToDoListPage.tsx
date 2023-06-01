import { useState } from 'react'
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from '../models/todo-item'
export const ToDoListPage = () => {
  const [todo_s, setTodo_s] = useState<ToDo[]>([])

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todo_s.length,
      text: text,
      isDone: false
    }
    setTodo_s([...todo_s, newToDo])
  }

  const updateToDo = (toDoItem: ToDo) => {
    const newToDos = todo_s.map((todo) => {
      if(todo.id === toDoItem.id) todo.isDone = !todo.isDone
      return todo
    })
    setTodo_s(newToDos)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    const newToDos = todo_s.filter((todo) => todo.id !== toDoItem.id)
    setTodo_s(newToDos)
  }

  return (
    <>
      <Form createNewToDo={createNewToDo}/>
      <ToDoList todo_s={todo_s} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
    </>
  )
}