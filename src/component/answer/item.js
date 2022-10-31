import React from 'react';

const Item = (props) => {
    return (
        <div className='ans-wrap'>
            <h4>{props.count}. {props.ask}</h4>
            <div className='ans'>
                <div className='left'>{props.ans}</div>
                <div className='right'>{props.result}</div>
            </div>
        </div>
    );
};

export default Item;