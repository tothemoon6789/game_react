import React from 'react';

function Textarea(props) {
    return (
        <div>
            <textarea
                cols={80}
                rows={15}
                value={props.action.inputValue}
                ref={props.myFunction.ref} //set focus input
                onChange={(e) => {
                    props.myFunction.updateInputValueOnchange(e.target.value);
                }}
            ></textarea>
        </div>
    );
}

export default Textarea;