import { getDatabase, push, set, ref,get,child } from 'firebase/database';
import React, { Component } from 'react';
import app from '../../firebase';

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
            dtFirebase:{}
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                this.setState({
                    ...this.state,
                    dtFirebase: snapshot.val()
                })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
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
                                            className="form-control" aria-describedby="helpId" placeholder="Nhập câu hỏi ?" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, answer: e.target.value }
                                                })
                                            }}
                                            ref={this.refAnswer} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập câu trả lời ?" />
                                    </div>
                                    <div className="form-group">
                                       
                                        {this.renderSelect()}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onChange={(e) => {
                                                this.setState((pre) => {
                                                    return { ...pre, result: e.target.value }
                                                })
                                            }}
                                            ref={this.refResult} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập result ?" disabled={true}/>
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
    // !method
    renderSelect = () => {
        const { dtFirebase } = this.state
        if (Object.keys(dtFirebase).length !== 0) {
            return (
                <select
                    className="form-control"
                    onChange={(val) => {
                        this.setState({ belong: val.target.value })
                    }}>
                    {dtFirebase.lesson.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>
            )
        }
        return null

    }
}

export default Modal;