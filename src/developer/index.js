import React, { Component } from 'react';
import data from './data.json'
import Item from './item';

class Developer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developer: data,
            belong: "javascript",
            count: 0,

        }
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
        developer.map((value) => {
            set.add(value.belong)

        })
        return Array.from(set).map((value) => {
            return <li><button className='btn btn-default btn-sm' onClick={() => {
                this.reRenderDeveloper(value)
            }}>{value}</button></li>
        })

    }
    // return <li>{value.belong}</li>
    // TODO: Render các câu hỏi
    developerQuestion = () => {
        const { developer, belong } = this.state;
        return developer.map((developer) => {
            return developer.belong === belong ?
                <Item developer={developer} /> : null

        })
    }
    // TODO: Phương thức render chính
    render() {
        console.log("RENDER")
        const {belong} = this.state;
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h1>{belong} <small>17 câu</small></h1>
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