import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="container">
      <h1>Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}