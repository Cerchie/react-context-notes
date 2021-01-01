import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'

const NavBar = () => {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <nav style={{backgroundColor: color}}>
            <span>website</span>
            <button onClick={toggleTheme}>Toggle</button>
        </nav>
    )
}

export default NavBar;