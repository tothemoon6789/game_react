import React, { Component } from 'react';
import Item from './item';
import app from '../../firebase';
import { child, get, getDatabase, onValue, ref, remove, set } from 'firebase/database';
import Modal from '../../component/modal/modal';


class Dashboard extends Component {
    // ! lif-cycle
    constructor(props) {
        super(props);
        this.state = {
            dtFirebase: {},
            belong: "javascript",
        }
   
    }
    componentDidMount() {
        const databaseRef = ref(getDatabase(app));
        get(child(databaseRef, "/"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    this.setState({
                        ...this.state,
                        dtFirebase: snapshot.val()
                    })
                } else {
                    console.log("No data found");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div >
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    {this.renderSelect()}
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <button
                                    className='btn btn-info'
                                    data-toggle="modal"
                                    data-target="#modelId"
                                >Thêm mới +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul style={{ "listStyle": "decimal" }}>
                            {this.loopDatabase()}
                        </ul>
                    </div>
                    <Modal />
                </div >
            </>
        );
    }
    //! method
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
    deleteDeveloper = (keyFirebase) => {
        if (window.confirm("HELLO WOLRD") == true) {
            const db = getDatabase();
            remove(ref(db, "developer/" + keyFirebase))
                .then(() => {
                    this.callFirebase();
                    // this.props.handleAlert({
                    //     alert: "alert-danger",
                    //     mes: "Đã xóa",
                    //     show: true,
                    // })
                })

        }
    }
    updateUpdator = (updated, keyFirebase) => {
        const db = getDatabase();
        set(ref(db, "developer/" + keyFirebase), updated)
            .then(() => {
                this.callFirebase()
            })
    }
    // TODO: loop du lieu
    loopDatabase = () => {
        const { dtFirebase, belong } = this.state;
        if (Object.keys(dtFirebase).length !== 0) {
            return Object.keys(dtFirebase.developer).map((key, index) => {
                return dtFirebase.developer[key]["belong"] === belong ?
                    <Item
                        key={index} keyFirebase={key}
                        developer={dtFirebase.developer[key]}
                        updateUpdator={this.updateUpdator}
                        deleteDeveloper={this.deleteDeveloper} /> : null
            })
        }
        return null
    }

}

export default Dashboard;