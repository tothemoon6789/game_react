import React, { Component } from 'react';
import Item from './item';
import app from '../firebase';
import { child, get, getDatabase, onValue, ref, set } from 'firebase/database';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: false,
            developer: {},
            belong: "javascript",
        }
        this.callFirebase();
    }
    updateUpdator = (updated,keyFirebase) => {
        const db = getDatabase();
        set(ref(db,"developer/"+keyFirebase),updated)
            .then(() => {
                this.callFirebase()
            })
    }
    // TODO: loop du lieu
    loopDatabase = () => {
        const { developer, belong } = this.state;
        return Object.keys(developer).map((key, index) => {
            return developer[key]["belong"] === belong ? <Item key={index} keyFirebase={key} developer={developer[key]} updateUpdator={this.updateUpdator}/> : null
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
    render() {
        const { dashboard } = this.state;
        return (
            <>
                <div className='container'>
                    <button className='btn btn-primary btn-sm' onClick={() => {
                        this.setState({ dashboard: true })
                    }}>Open Dashboard</button>
                    <button className='btn btn-danger btn-sm' onClick={() => {
                        this.setState({ dashboard: false })
                    }}>Close Dashboard</button>
                </div>
                <div className='container' style={dashboard ? { "display": "" } : { "display": "none" }}>
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
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul style={{ "listStyle": "decimal" }}>
                            {this.loopDatabase()}
                        </ul>
                    </div>
                </div >
            </>
        );
    }
}

export default Dashboard;