import React, {useContext} from 'react';
import CountContext from './CountContext'
import ThemeContext from '../ThemeContext'
function GreatGreatGrandChild(){
   const {count, increment } = useContext(CountContext);
   const color = useContext(ThemeContext);
return (
    <div>
        <p> I'm a great-great-granddchild</p>
        <p>I also consume {count}</p>
        <button style={{color}} onClick={add}>Increment Count</button>
    </div>
)
}

export default GreatGreatGrandChild;