import React from 'react';
import "./style.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Answers from './component/answer';
import Layout from './component/layout';
import Nopage from './component/nopage';
import Review from './component/review';
import Developer from './developer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Developer/>}/>
            <Route path='review' element={<Review/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;