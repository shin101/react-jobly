import React, {useEffect, useState} from "react";
import JoblyApi from "../API/api"
import CompanyCard from "./CompanyCard";
import SearchForm from "../Search/SearchForm";


function CompanyList(){
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function search(){
      setCompanies(await JoblyApi.getAllCompanies());
    }
    search();
  }, []);


  return (
    <div>
      <input 
        onChange={e => setSearchTerm(e.target.value)} 
        name="search-term" 
        value={searchTerm} 
      />
      <button type="submit" onClick={async e => {
        e.preventDefault();
        setCompanies(await JoblyApi.getAllCompanies({ name: searchTerm }));
      }}>Search</button>
      {companies.map(company => (
        <CompanyCard {...company} />
      ))}
    </div>
  )
}

export default CompanyList;