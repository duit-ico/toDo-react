import { useEffect, useState } from 'react'
import { ToDo } from '../models/todo-item'
import { useNavigate, useParams } from 'react-router-dom'

interface ComponentProps {
  todo_s: ToDo[]
}

export const ItemDescription = ({todo_s}: ComponentProps) => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo>()

  // В данном хуке, можно вытянуть инфу о идентификаторе в URL с помощью хука useParams()
  useEffect(() => {
    const searchTodo = todo_s.find((todo) => String(todo.id) === id)

    if(searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/404')
    }
    // useEffect будет следить за состоянием этих переменных: [todo_s, id, navigate]
  }, [todo_s, id, navigate])
  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  )
}