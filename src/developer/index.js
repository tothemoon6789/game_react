import React, { Component } from 'react';
import Item from './item';
import app from '../firebase';
import { getDatabase, ref, onValue, set, push, get, child } from 'firebase/database';


class Developer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developer: {},
            belong: "javascript",
            totalSentence: 0,
       

        }
        this.firebase();

    }
    // TODO: init firebase database 
    firebase = () => {
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, 'developer/')).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                this.setState({
                    developer:snapshot.val()
                })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    // TODO: render total sentence
    totalSentence = (belongValue) => {
        let totalSentence = 0;
        
       Object.keys( this.state.developer).map((key) => {
            
            if (this.state.developer[key]["belong"] === belongValue) {
                totalSentence++
            }
        }) 
        return totalSentence;
    }
    // TODO: Re Render bai hoc
    reRenderDeveloper = (belong) => {
        console.log(belong);
        this.setState({
            belong: belong,
        })
    }
    // TODO: Rende danh muc
    renderEntries = () => {
        const { developer } = this.state;
        const set = new Set([])
        Object.keys(developer).map((key) => {
            set.add(developer[key]["belong"])
        })
        return Array.from(set).map((value) => {
            return <li><button className='btn btn-default btn-sm' onClick={() => {
                this.reRenderDeveloper(value)
            }}>{value}</button></li>
        })

    }

    // TODO: Render các câu hỏi
    developerQuestion = () => {
        const { developer, belong } = this.state;
        return developer ?
         Object.keys(developer).map((key) => {
            return developer[key].belong === belong ?
                <Item theKey={key} developer={developer[key]} /> : null

        }) 
        : null
    
    }
    // TODO: Phương thức render chính
    render() {
        
    

        const { belong } = this.state;
        return (
            <>
               
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h1>{belong} <span className="badge badge-secondary">{this.totalSentence(belong)} câu</span></h1>
                            <ul style={{ "listStyle": "decimal" }}>
                                {this.developerQuestion()}
                            </ul>
                        </div>
                        <div className='col-md-4 sticky-top'>
                            <ul>
                                {this.renderEntries()}
                            </ul>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}

export default Developer;