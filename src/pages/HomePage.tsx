import { ListItem } from '../components/ListItem/ListItem'
import { ToDo } from '../models/todo-item'

interface ComponentProps {
  todo_s: ToDo[]
}

export const HomePage = ({todo_s}: ComponentProps) => {
  return (
    <div className='container'>
      {
        todo_s.map((todo: ToDo, idx: number) => {
          return (<ListItem todo={todo} key={idx}/>)
        })
      }
    </div>
  )
}