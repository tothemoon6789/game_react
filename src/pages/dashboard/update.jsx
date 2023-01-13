import React, { Component, createRef } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: {
                ask: ""
            },
            value: "ffff",

        }
    }
    ask = createRef();
    answer = createRef();
    belong = createRef();
    result = createRef();
    // TODO: cập nhật dữ liệu trên firebase
    updateFb = () => {
        const { switchDisplay, updateUpdator, keyFirebase } = this.props;
        switchDisplay()
        this.setState({
            updated: {
                ask: this.ask.current.value,
                answer: this.answer.current.value,
                belong: this.belong.current.value,
                result: this.result.current.value,
            }
        }, () => {
            updateUpdator(this.state.updated, keyFirebase)
        })
    }
    render() {
        const { updator, display } = this.props;

        return (
            <div style={{ "display": `${display}` }}>
                <div className='row' >
                    <div className='col-md-8 border p-3 rounded'>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Ask</span>
                            </div>
                            <input defaultValue={updator.ask} ref={this.ask} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />

                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Answer</span>
                            </div>
                            <textarea
                                defaultValue={updator.answer}
                                ref={this.answer}
                                rows={3}
                                type="text" className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <label >Belong</label>
                            <select
                                ref={this.belong}
                                className="form-control"
                                defaultValue={updator.belong}>
                                <option value="javascript">javascript</option>
                                <option value="object">object</option>
                                <option value="promise">promise</option>
                                <option value="regex">regex</option>
                                <option value="reactjs">reactjs</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Result</span>
                            </div>
                            <input
                                ref={this.result}
                                defaultValue={updator.result}
                                type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <button onClick={() => this.updateFb()} className='btn btn-block btn-info'>Update</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Update;