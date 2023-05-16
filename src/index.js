import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Employees from './Employees';
import UpdateEmployee from './updateEmployee';
import NavBar from './Nav';
import Uploadfile from './Uploadfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Router>
    <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/employees' element={<Employees/>}></Route>
    <Route path='/reactemployees' element={<Employees/>}></Route>
    <Route path="/updateemployee" element={<UpdateEmployee />}/>
    <Route path="/upload" element={<Uploadfile />}/>
    
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
