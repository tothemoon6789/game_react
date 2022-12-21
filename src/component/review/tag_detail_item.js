import React from 'react';
import PropTypes from 'prop-types';

const TagDetailItem = props => {
    return (
        <>
            <div className='TagDetailItem-wrap'>
                {Object.keys(props.javascript).map((item) =>
                    props.javascript[item]["belong"] === props.belong
                        ?
                        <div className='TagDetailItem'>
                            <div className='left'>
                                {props.javascript[item]["ask"]}
                            </div>
                            <div className='right'>
                                {props.javascript[item]["ans"]}

                            </div>

                        </div>
                        :
                        null)}
            </div>
        </>
    );
};


export default TagDetailItem;