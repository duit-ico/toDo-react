import { NavLink } from 'react-router-dom'
import classes from "./Header.module.scss";

export const Header = () => {
  // Ф-ция определяющая активную ссылку
  const getActiveClass = ({isActive}: {isActive: boolean}): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  }
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink className={getActiveClass} to="/">Home</NavLink>
        <NavLink className={getActiveClass} to="/todo">ToDo</NavLink>
      </div>
    </header>
  )
}