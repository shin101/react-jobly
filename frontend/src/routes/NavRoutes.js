import React from "react"; 
import { Routes, Route } from 'react-router-dom';
import CompanyList from "../companies/CompanyList";

function NavRoutes (){
  return(
    <div>
      <Routes>
        <Route exact path="/companies" element={<CompanyList />} />
      </Routes>
    </div>  
  )
}

export default NavRoutes;