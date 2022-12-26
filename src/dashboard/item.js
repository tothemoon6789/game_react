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
    const { developer, keyFirebase, updateUpdator, deleteDeveloper } = this.props

    return (
      <>
        <li key={keyFirebase} >
          <div >
            <div className='d-flex justify-content-between'>
              <h5 className=''>{developer["ask"]}</h5>
              <div className='d-flex'>


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
                  style={{ "top": "0", "right": "0" }}>
                  <i className="fa-solid fa-gear"></i>
                </button>
                <button
                  className='btn btn-default'
                  onClick={() => deleteDeveloper(keyFirebase)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <p>{developer["answer"]}</p>
          </div>
          <Update
            updator={developer}
            display={this.state.display}
            switchDisplay={this.switchDisplay}
            updateUpdator={updateUpdator}
            keyFirebase={keyFirebase}
          />
        </li>

      </>
    );
  }
}

export default Item;