import React from 'react';
import '../companies/Cards.css'



function JobCard({ title, company, salary, equity, companyName }){
  return (
      <div className='container'>
        <div className="jobTitle">{title}</div>
        <p className="company"><small>{companyName}</small></p>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
        <button>Apply</button>
      </div>
  )
}

export default JobCard;