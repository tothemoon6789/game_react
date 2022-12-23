import React, { Component } from 'react';
import Item from './item';
import app from '../firebase';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';

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
    // TODO: loop du lieu
    loopDatabase = () => {
        const { developer, belong } = this.state;
        return Object.keys(developer).map((key) => {
            return developer[key]["belong"] === belong ? <Item key={key} developer={developer[key]} /> : null
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


                    <div className='row' >
                        <div className='col-md-8 border p-3 rounded'>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >Ask</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >Answer</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <label htmlFor>Belong</label>
                                <select className="form-control" name id>
                                    <option>javascript</option>
                                    <option>object</option>
                                    <option>promise</option>
                                    <option>regex</option>
                                </select>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" >Result</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <button className='btn btn-block btn-info'>Add</button>
                        </div>




                    </div>



                    <div >
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <label htmlFor />
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