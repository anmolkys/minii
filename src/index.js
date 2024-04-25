import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Feedback from './Components/Feedback';
import Course from './Components/Course';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={App}></Route>
        <Route path="/feedback" Component={Feedback}></Route>
        <Route path='/course' Component={Course}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

