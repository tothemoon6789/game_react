import React, { Component, useState } from 'react';
// import "./style.scss"
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTemplate from './templates/CustomerTemplate';
import Home from './pages/home/Home';

export default class App extends Component {
  
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
            <Route path='' element={<CustomerTemplate/>}>
                <Route index element={<Home/>}></Route>
                <Route path='dashboard' element={<Dashboard/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
      
      </>
    );
  }

 
};

