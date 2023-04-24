import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


export const Header = () => {
    return <header className={s.headerContainer}>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='settings'>Settings</NavLink>
        <NavLink to='aboutMe'>About me</NavLink>
        <NavLink to='logIn'>Log in</NavLink>
        <NavLink to='timer'>Timer</NavLink>
        <NavLink to='logOut'>Log Out</NavLink>
        <NavLink to='toDo'>To-Do</NavLink>
    </header>
}