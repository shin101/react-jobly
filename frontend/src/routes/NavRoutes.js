import React from "react"; 
import { Routes, Route } from 'react-router-dom';
import CompanyList from "../companies/CompanyList";
import ProfileForm from "../profiles/ProfileForm";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";

function NavRoutes (){
  return(
    <div>
      <Routes>
        <Route exact path="/companies" element={<CompanyList />} />
      </Routes>

      <Routes>
        <Route exact path="/companies/:id" element={<CompanyDetail />} />
      </Routes>

      <Routes>
        <Route exact path="/profile" element={<ProfileForm />} />
      </Routes>

      <Routes>
        <Route exact path="/jobs" element={<JobList />} />
      </Routes>


    </div>  
  )
}

export default NavRoutes;