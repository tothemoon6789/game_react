import React from 'react';
import { useState } from 'react';
import Tag from './tag';
import Tagdetail from './tagdetail';

const TagReview = (props) => {
    const [belong, setBelong] = useState("");
    let arr = [];
    let arrJs = [];
    Object.keys(props.javascript).map((item) => arr.push(props.javascript[item]["belong"]));
    arr.map((item) => arrJs.includes(item) ? null : arrJs.push(item))

    const callbackFunction = (childData) => {
        setBelong(childData)
    }
    return (
        <>
            <div className='tag-review'>
                {arrJs.map((key) => <Tag parentCallback={callbackFunction} content={key} />)}
            </div>
            <h1>{belong}</h1>
            <Tagdetail javascript={props.javascript} belong = {belong} />
        </>
    );
};

export default TagReview;