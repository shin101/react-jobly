import React, {useEffect, useState} from "react";
import JoblyApi from "../API/api"
import JobCard from "./JobCard";


function JobList(){
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function search(){
      setJobs(await JoblyApi.getAllJobs());
    }
    search();
  }, []);


  return (
    <div>
      <input></input>
      <button type="submit">Search</button>

      {jobs.map(job =>(<JobCard {...job} />))}

   
    </div>
  )
}

export default JobList;

