import React, { Component } from 'react';
import Developer from '../../developer';
import Dashboard from '../../dashboard';
import Alert from '../../alert';
import Modal from '../../modal/modal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          alert: "alert-info",
          mes: "NEW HELLO WOLRD",
          show: false,
        }
      }
      render() {
        return (
          <>
            <Modal handleAlert={this.handleAlert} />
            <Dashboard handleAlert={this.handleAlert} />
            <Developer />
            <Alert action={this.state} closeAlert={this.closeAlert} />
          </>
        );
      }
    
      // TODO: for alert
      handleAlert = (value) => {
        this.setState(value)
      }
    
      // TODO: for alert
      closeAlert = (close) => {
        this.setState({
          ...this.state, 
          show:close
        })
      }
}

export default Home;


