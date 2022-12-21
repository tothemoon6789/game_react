import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideAnswer: true,
            inputField: "fdafd",
            hightLight: true,
            colorText: ""
        }
    }
    handleHideAnswer = (value) => {
        this.setState({
            hideAnswer: false,
            inputField: value,
        })
    }
    hideAnswer = () => {
        return this.state.hideAnswer ? null :
            <>
                <p>{this.props.developer["answer"]}</p>
                <h6 className={this.state.colorText}>{this.state.inputField}</h6>
                <div style={this.state.hightLight ? null:{"display":"none"}}>
                    <button
                        className='btn btn-default border'
                        onClick={() => {
                            this.setState({
                                colorText: "bg-success text-light",
                                hightLight : false,
                            })
                        }}

                    >OK</button>
                    <button className='btn btn-default' onClick={() => {
                        this.setState({
                            colorText: "bg-danger text-light",
                            hightLight : false,
                        })
                    }}>Fail</button>
                </div>

            </>
    }
    render() {
        const { developer, hightLight } = this.props
        return (
            <li className={hightLight ? 'bg-danger p-1 mt-1 rounded' : 'p-1 mt-1 rounded'}>
                {developer["ask"]}
                {this.hideAnswer()}
                <div className="form-group"
                    style={this.state.hideAnswer ?
                        { "display": "block" } :
                        { "display": "none" }}>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder="Trả lời"
                        onBlur={(v) => {
                            this.handleHideAnswer(v.target.value);

                        }}
                    />

                </div>
            </li>
        );
    }
}

export default Item;