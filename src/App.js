import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateKaryawanComponent from './components/CreateKaryawanComponent';
import ListKaryawanComponent from './components/ListKaryawanComponent';
import ViewKaryawanComponent from './components/ViewKaryawanComponent';

function App() {
  return (
    <Router>
            <HeaderComponent />
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListKaryawanComponent}></Route>
                        <Route path = "/karyawans" component = {ListKaryawanComponent}></Route>
                        <Route path = "/add-karyawan/:id" component = {CreateKaryawanComponent}></Route>
                        <Route path = "/view-karyawan/:id" component = {ViewKaryawanComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                  </Switch>
              </div>
            <FooterComponent />
    </Router>
  );
}

export default App;
