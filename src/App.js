import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home.js";
import Navbar from "./components/Layout/Navbar.js";
import {HashRouter,Switch,Route} from "react-router-dom";
import AddUser from './components/userdata/AddUser';
import EditUser from './components/userdata/EditUser';
import ViewUser from './components/userdata/ViewUser';


function App() {
  return (
    <div className="App">

      <HashRouter>
        <Navbar />
        
          <Switch>
            
            <Route exact path="/"> 
            <Home /> 
            </Route>

            <Route exact path="/users/add"> 
              <AddUser /> 
            </Route>

            <Route exact path="/users/edit/:id"> 
              <EditUser /> 
            </Route>

            <Route exact path="/users/view/:id"> 
              <ViewUser /> 
            </Route>

          </Switch>
      </HashRouter>
        
    </div>
  );
}

export default App;
