import React, {useEffect, useState} from "react";
import JoblyApi from "../API/api"
import CompanyCard from "./CompanyCard";
import SearchForm from "../Search/SearchForm";


function CompanyList(){
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function search(){
      setCompanies(await JoblyApi.getAllCompanies());
    }
    search();
  }, []);


  return (
    <div>
    <SearchForm />
      {companies.map(company => (
      <CompanyCard 
      name = {company.name}
      description = {company.description}
      logo = {company.logo}
      id = {company.id}
      />))}

   
    </div>
  )
}

export default CompanyList;