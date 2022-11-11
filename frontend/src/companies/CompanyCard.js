import React from 'react';
import './CompanyCard.css'


function CompanyCard({name, description, logo}){
  return (
    <div>
      {name}
      <p><small>{description}</small></p>

    </div>
  )
}

export default CompanyCard;