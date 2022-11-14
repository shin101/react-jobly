import React, { useContext } from 'react';
import '../companies/Cards.css'
import UserContext from '../Login/UserContext';


function JobCard({ id, title, salary, equity, companyName }){
  const { applications, apply } = useContext(UserContext);
  const hasApplied = applications.has(id);

  return (
    <div className='container'>
      <div className="jobTitle">{title}</div>
      <p className="company"><small>{companyName}</small></p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button disabled={hasApplied} type="submit" onClick={async e=> {
        e.preventDefault(); 
        await apply(id)}} 
        >{hasApplied ? "Applied" : "Apply"}</button>
    </div>
  )
}

export default JobCard;