import React from 'react';
import '../companies/Cards.css'
import { Link } from "react-router-dom";


function JobCard({ title, company, salary, equity, company_handle }){
  return (
      <Link to={`/jobs/${company_handle}`} style={{ textDecoration: 'none' }}>
        <div className='container'>
          <div className="jobTitle">{title}</div>
          <p className="company"><small>{company}</small></p>
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
          <button>Apply</button>
        </div>
      </Link>
  )
}

export default JobCard;