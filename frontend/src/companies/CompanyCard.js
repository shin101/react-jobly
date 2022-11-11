import React from 'react';
import './CompanyCard.css'
import { Link } from "react-router-dom";


function CompanyCard({ name, description, logo, id, handle }){
  return (
    <Link to={`/companies/${handle}`} style={{ textDecoration: 'none' }}>
      <div className='container'>
        <div className="companyName">{name}</div>
        <p className="description"><small>{description}</small></p>
 
      </div>
    </Link>
  )
}

export default CompanyCard;