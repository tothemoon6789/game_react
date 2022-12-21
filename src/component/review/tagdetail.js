import React from 'react';
import PropTypes from 'prop-types';
import TagDetailItem from './tag_detail_item';

const Tagdetail = props => {
    return (
        <>
        <TagDetailItem javascript = {props.javascript} belong = {props.belong}/>
        </>
    );
};



export default Tagdetail;