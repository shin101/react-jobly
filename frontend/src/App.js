import './App.css';
import NavBar from './routes/NavBar';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from './routes/NavRoutes'; 
import JoblyApi from '../src/API/api';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  // function login(){
  //   try {

  //   } catch {

  //   }
  // }

  function signUp(signUpData){
    // returns token then update state
      const token = JoblyApi.register(signUpData);
      setToken(token);
    }


    // function logOut(){
    //   return (
    //     "blah"
    //   )
    // }
  
    return (
      <div>
        <BrowserRouter>
          <NavBar currUser={currUser}/>
          <NavRoutes signUp={signUp}/>
       </BrowserRouter>
      </div>
  
    );
  }


export default App;
