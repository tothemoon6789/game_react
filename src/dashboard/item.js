import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {developer,key} = this.props
        return (
          <>    
            <li key={key} >

                <h5>{developer["ask"]}</h5>
                <p>{developer["answer"]}</p>
            </li>
          
          </>
        );
    }
}

export default Item;