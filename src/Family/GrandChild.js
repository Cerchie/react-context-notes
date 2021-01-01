import React, {useContext} from 'react';
import CountContext from './CountContext'

function GrandChild(){
    const {count, increment} = useContext(CountContext);
return (
    <div>
        <p> I'm a granddchild</p>
        <p>Count is {count}</p>
    </div>
)
}

export default GrandChild;