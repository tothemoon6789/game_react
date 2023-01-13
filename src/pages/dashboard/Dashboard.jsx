import React, { Component } from 'react';
import Item from './item';
import app from '../../firebase';
import { child, get, getDatabase, onValue, ref, remove, set } from 'firebase/database';
import Modal from '../../component/modal/modal';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developer: {},
            belong: "javascript",
        }
        this.callFirebase();
    }

    render() {
        const { dashboard } = this.state;
        return (
            <>
                <div className='container'>
                    <div >
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <select className="form-control" onChange={(val) => {
                                        this.setState({ belong: val.target.value })
                                    }}>
                                        <option>javascript</option>
                                        <option>object</option>
                                        <option>regex</option>
                                        <option>promise</option>
                                        <option>reactjs</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <button
                                    className='btn btn-info'
                                    data-toggle="modal" data-target="#modelId"
                                >Thêm mới +</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul style={{ "listStyle": "decimal" }}>
                            {this.loopDatabase()}
                        </ul>
                    </div>
                    <Modal/>
                </div >
            </>
        );
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
        const { developer, belong } = this.state;
        return Object.keys(developer).map((key, index) => {
            return developer[key]["belong"] === belong ?
                <Item
                    key={index} keyFirebase={key}
                    developer={developer[key]}
                    updateUpdator={this.updateUpdator}
                    deleteDeveloper={this.deleteDeveloper} /> : null
        })
    }
    // TODO: lay du lieu tu firebase conect vao contructor
    callFirebase = () => {
        const databaseRef = ref(getDatabase(app));
        get(child(databaseRef, "developer/"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    this.setState({ developer: snapshot.val() })
                } else {
                    console.log("No data found");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default Dashboard;