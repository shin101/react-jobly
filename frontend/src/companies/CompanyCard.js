import React from 'react';
import './CompanyCard.css'
import { Link } from "react-router-dom";


function CompanyCard({name, description, logo, id}){
  return (
    <Link to={`/${name}`} style={{ textDecoration: 'none' }}>
      <div className='container'>
        <div className="companyName">{name}</div>
        <p className="description"><small>{description}</small></p>
 
      </div>
    </Link>
  )
}

export default CompanyCard;