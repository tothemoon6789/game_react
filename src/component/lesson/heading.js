import React from 'react';

function Heading(props) {
    return (
        <div>
            <h3>{props.action.count}. {props.javascript[props.action.key].ask}</h3>
        </div>
    );
}

export default Heading; 