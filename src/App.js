import React, { useState } from 'react';
import "./style.scss"
import Developer from './developer';
import Dashboard from './dashboard';
import Alert from './alert';
import Modal from './modal/modal';

const App = () => {
  // TODO: for alert
  const [alert, setAlert] = useState({
    alert: "alert-info",
    mes: "NEW HELLO WOLRD",
    show: false,
  })
  // TODO: for alert
  const handleAlert = (value) => {
    setAlert(value)
  }
  // TODO: for alert
  const closeAlert = (close) => {
    setAlert((pre) => {
      return { ...pre, show: close }
    })
  }
  return (
    <>
      <Modal handleAlert={handleAlert}/>
      <Dashboard handleAlert={handleAlert} />
      <Developer />
      <Alert action={alert} closeAlert={closeAlert} />

    </>
  );
};

export default App;