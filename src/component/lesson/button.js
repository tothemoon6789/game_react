import React from 'react';

function Button(props) {
    return (
        <div>
             <button
                onClick={() => {
                    // props.updateCount();
                    props.myFunction.updateCount();
                    //set focus input
                    props.myFunction.ref.current.focus();
                }}>
                Next
            </button>
        </div>
    );
}

export default Button;      