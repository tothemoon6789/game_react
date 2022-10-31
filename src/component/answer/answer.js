import React from 'react';
import Item from './item';
const Answer = (props) => {
    return (
        <div>
            {Object.keys(props.DATA_OBJ).map((i) => <Item 
            ask={props.DATA_OBJ[i].ask} 
            ans={props.DATA_OBJ[i].ans} 
            result={props.DATA_OBJ[i].result}
            count ={props.DATA_OBJ[i].count}
            />)}
        </div>
    );
};

export default Answer;