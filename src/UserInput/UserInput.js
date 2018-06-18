import React from 'react';

const userinput = (props) => {

    return (

        <div className="UserInput">
            <input type="text" onChange={props.change} value={props.username} style={props.style}/>
        </div>

    )

};

export default userinput;
