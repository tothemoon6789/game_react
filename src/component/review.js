import React from 'react';
import javascript from '../data/javascript'
import TagReview from './review/tagreview';
const Review = () => {
    return (
        <TagReview javascript = {javascript}/>
        // <ContentReview/>
    );
};

export default Review;