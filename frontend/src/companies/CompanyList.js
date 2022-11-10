import React, {useState} from "react";
import JoblyApi from "../API/api"
import CompanyCard from "./CompanyCard";
import SearchForm from "../Search/SearchForm";


function CompanyList(){
  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");

  async function search(query){
    const companies = await JoblyApi.getCompany(query);
    console.log(companies)
  }

  return (

    <div>
    <SearchForm />
      company list here. 
    <CompanyCard />
    {search.companies}
    </div>
  )
}

export default CompanyList;