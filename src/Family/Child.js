import React, {useContext, useState} from 'react';
import GrandChild from './GrandChild';
import CountContext from './CountContext'
import ThemeContext from '../ThemeContext'

function Child(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count=> count +1)
    }
    const color = useContext(ThemeContext)
    return (
        <CountContext.Provider value={{count, increment}}>
        <div>
            <p>I'm the child!</p>
            <p>I 'own' count. It's {count}</p>
            <button style={{color}} onClick={increment}>Add to count</button>
            <GrandChild />
        </div>
        </CountContext.Provider>
    )
}

export default Child;