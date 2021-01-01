import React, {useContext} from 'react';
import GreatGreatGrandChild from './GreatGreatGrandChild'
import CountContext from './CountContext'


function GreatGrandChild(){
   const {count, increment} = useContext(CountContext);
return (
    <div>
        <p> I'm a great-granddchild</p>
        <p>Count is {count}</p>
        <button onClick={increment}>Increment Count</button>
        <GreatGreatGrandChild />
    </div>
)
}

export default GreatGrandChild;