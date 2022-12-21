import React from 'react';
import Heading from './heading';
import Textarea from './textarea';
import Button from './button';
function Lesson(props) {
    return (
        <div
            className='top'
            style={props.action.count === (props.action.arrayLength - 1) ? { "display": "none" } : { "display": "flex" }}>
            <Heading action={props.action} javascript={props.javascript} />
            <Textarea action={props.action} myFunction={props.myFunction} />
            <Button myFunction={props.myFunction} />
        </div>
    );
}

export default Lesson;
