import './App.css';
import NavBar from './routes/NavBar';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from './routes/NavRoutes'; 
import JoblyApi from '../src/API/api';
import { useEffect, useState } from 'react';
import jwt from "jsonwebtoken";
import UserContext from './Login/UserContext';


function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [applications, setApplications] = useState(new Set());
  
  // triggered by state change of token 
  // call backend to get information on the newly-logged-in user and store it in the currentUser state

  useEffect(() => {
    async function loadCurrentUser() {
      const payload = jwt.decode(token);
      JoblyApi.token = token;
      const currUser = await JoblyApi.getUser(payload.username);

      setCurrUser(currUser);
      setApplications(new Set(currUser.applications));
    }

    if (token) {
      loadCurrentUser();
    }    
  }, [token]); 

  async function login(loginData){
    try {
      const token = await JoblyApi.login(loginData);
      setToken(token);
    } catch (e) {
      return (e);
    }
  }

  async function signUp(signUpData){
    // returns token then update state
      const token = await JoblyApi.register(signUpData);
      setToken(token);
    }

  function logOut(){
    setCurrUser(null);
    setToken(null);
  }

  async function apply(id) {
    if (!applications.has(id)) {
      const jobId = await JoblyApi.apply(currUser.username, id);
      setApplications(applications => new Set([...applications, jobId]));
    }
  }
  
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ applications, currUser, setCurrUser, apply }}>
          <NavBar logOut={logOut} />
          <NavRoutes signUp={signUp} login={login}  />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}


export default App;
