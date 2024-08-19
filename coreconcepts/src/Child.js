import React from 'react';

const Child = ({valueOfProps, changeName})=>{
    return (
        <div>
            <h2>{valueOfProps}</h2>
            <button onClick={()=>changeName('Rama krishna')}>ChangeName</button>
        </div>
    )
}
export default Child;