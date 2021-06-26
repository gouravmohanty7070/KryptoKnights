import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home'
import ToDoList from './ToDoList'
import Timer from './Timer'
import Bmi from './Bmi'
import Contact from './Contact'
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return ( <>
        <Navbar/>
        <Switch>
          <Route exact path = "/"  component = {Home}/>
          <Route exact path = "/todolist"  component = {ToDoList}/>
          <Route exact path = "/timer"  component = {Timer}/>
          <Route exact path = "/bmi"  component = {Bmi}/>
          <Route exact path = "/contact"  component = {Contact}/>
          <Redirect to = '/' />
        </Switch>
        <Footer/>
    </> )
}

export default App;