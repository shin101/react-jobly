import React, { useContext } from "react"; 
import { Routes, Route } from 'react-router-dom';
import CompanyList from "../companies/CompanyList";
import ProfileForm from "../profiles/ProfileForm";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import RegisterForm from "../Login/RegisterForm";
import LoginForm from "../Login/LoginForm";
import Homepage from "../Homepage/Homepage";
import UserContext from "../Login/UserContext";

function NavRoutes({ login, signUp, edit }) {
  const { currUser } = useContext(UserContext);

  return (
    <Routes>
      {currUser ? 
        <>
          <Route exact path="/companies" element={<CompanyList />} />
          <Route exact path="/companies/:id" element={<CompanyDetail />} />
          <Route exact path="/profile" element={<ProfileForm />} />
          <Route exact path="/jobs" element={<JobList />} />
        </>
      : 
        <>
          <Route exact path="/signup" element={<RegisterForm signUp={signUp} />} />
          <Route exact path="/login" element={<LoginForm login={login} />} />
        </>
      }
      <Route exact path="*" element={<Homepage />} />
    </Routes>
  )
}

export default NavRoutes;