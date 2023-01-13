import { getDatabase, push, set, ref } from 'firebase/database';
import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.refAsk = React.createRef();
        this.refAnswer = React.createRef();
        this.refBelong = React.createRef();
        this.refResult = React.createRef();
        this.state = {
            ask: "",
            answer: "",
            belong: "javascript",
            result: "",
        }
    }
    render() {
        return (
            <>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, ask: e.target.value }
                                                })
                                            }}
                                            ref={this.refAsk}
                                            type="text"
                                            className="form-control" aria-describedby="helpId" placeholder="Enter the question ?" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, answer: e.target.value }
                                                })
                                            }}
                                            ref={this.refAnswer} type="text" className="form-control" aria-describedby="helpId" placeholder="Enter the question ?" />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, belong: e.target.value }
                                                })
                                            }}
                                            defaultValue="javascript"
                                            ref={this.refBelong} className="form-control" >
                                            <option>object</option>
                                            <option>regex</option>
                                            <option>promise</option>
                                            <option>javascript</option>|
                                            <option>reactjs</option>

                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, result: e.target.value }
                                                })
                                            }}
                                            ref={this.refResult} type="text" className="form-control" aria-describedby="helpId" placeholder="Enter the question ?" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button
                                        data-dismiss="modal"
                                        onClick={() => {
                                            const db = getDatabase();
                                            const postListRef = ref(db, "developer");
                                            const newPostRef = push(postListRef);
                                            set(newPostRef, this.state)
                                                .then(() => {
                                                    // Thanh cong
                                                    this.props.handleAlert(
                                                        {
                                                            alert: "alert-success",
                                                            mes: "Thêm thành công",
                                                            show: true,
                                                        }
                                                    )
                                                    this.setState({
                                                        ask: "",
                                                        answer: "",
                                                        belong: "javascript",
                                                        result: "",
                                                    })
                                                })
                                        }}
                                        type="button" className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Modal;