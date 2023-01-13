import React, { Component } from 'react';
import Developer from './Developer';
import Dashboard from '../dashboard/Dashboard';
import Alert from '../../component/alert';
import Modal from '../../component/modal/modal';

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


