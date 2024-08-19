import React from 'react';

const Address =({valueOfState, changeState})=>{
    return (
        <div>
            <h2>{valueOfState}</h2>
            <button onClick={()=>changeState('AndharaPradesh')}>ChangeState</button>
        </div>
    )
}
export default Address;