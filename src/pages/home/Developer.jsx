import React, { Component } from 'react';
import Item from './item';
import app from '../../firebase';
import { getDatabase, ref, onValue, set, push, get, child } from 'firebase/database';


class Developer extends Component {
    // ! life cycle
    constructor(props) {
        super(props);
        this.state = {
            dtFirebase: {},
            belong: "javascript",
            totalSentence: 0,
        }


    }
    componentDidMount() {
        console.log("componentDidMount");
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                this.setState({
                    dtFirebase: snapshot.val()
                })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    // TODO: Phương thức render chính
    render() {
        const { belong } = this.state;
        return (
            <>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-4'>
                            <ol className='' style={{ listStyleType: "upper-roman" }}>
                                {this.renderEntries()}
                            </ol>
                        </div>
                        <div className='col-md-8'>
                            <h1>{belong} <span className="badge badge-secondary">{this.totalSentence(belong)} câu</span></h1>
                            <ul style={{ "listStyle": "decimal" }}>
                                {this.developerQuestion()}
                            </ul>
                        </div>

                    </div>

                </div>

            </>
        );
    }

    // ! method
    // TODO: render total sentence
    totalSentence = (belongValue) => {
        const { dtFirebase } = this.state
        let totalSentence = 0;
        if (Object.keys(dtFirebase).length !== 0) {
            console.log("DA VAO DAY");
            console.log(typeof dtFirebase);
            Object.keys(dtFirebase.developer).map((key) => {

                if (dtFirebase.developer[key]["belong"] === belongValue) {
                    totalSentence++
                }
            })
            return totalSentence;
        }
        return null

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
        const { dtFirebase } = this.state
        if (Object.keys(dtFirebase).length !== 0) {
            return dtFirebase.lesson.map((value, index) => {
                return <li
                    onClick={() => {
                        this.reRenderDeveloper(value)
                    }}
                    className='border p-1 px-3'
                    key={index}
                    style={
                        { cursor: "pointer" }
                    }>
                    {value}
                </li>
            })
        }


    }

    // TODO: Render các câu hỏi
    developerQuestion = () => {
        const { dtFirebase, belong } = this.state;
        return Object.keys(dtFirebase).length !== 0 ?
            Object.keys(dtFirebase.developer).map((key, index) => {
                return dtFirebase.developer[key].belong === belong ?
                    <Item key={index} theKey={key} developer={dtFirebase.developer[key]} /> : null

            })
            : null

    }
}

export default Developer;