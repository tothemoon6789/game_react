import React, { Component } from 'react';
import Update from './update';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      switchDisplay: true,
    }
  }
  switchDisplay = () => {
    this.setState({
      display: "none",
      switchDisplay: true,
    })
  }
  render() {
    // ! BOC TACH DU LIEU
    const { developer, keyFirebase,updateUpdator } = this.props
    console.log(keyFirebase);
    return (
      <>
        <li key={keyFirebase} >
          <div >
            <div className='d-flex justify-content-between'>
              <h5 className=''>{developer["ask"]}</h5>
              <button
                onClick={() => {
                  this.state.switchDisplay ?
                    this.setState({
                      display: "",
                      switchDisplay: false,
                    }) :
                    this.setState({
                      display: "none",
                      switchDisplay: true,
                    })
                }}
                className="btn btn-default position-relative"
                style={{ "top": "0", "right": "0" }}><i className="fa-solid fa-gear"></i></button>
            </div>
            <p>{developer["answer"]}</p>
          </div>
          <Update
            updator={developer}
            display={this.state.display}
            switchDisplay={this.switchDisplay} 
            updateUpdator = {updateUpdator}
            keyFirebase = {keyFirebase}
            />
        </li>

      </>
    );
  }
}

export default Item;