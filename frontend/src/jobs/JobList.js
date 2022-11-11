import React, {useEffect, useState} from "react";
import JoblyApi from "../API/api"
import SearchForm from "../Search/SearchForm";


function JobList(){
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function search(){
      setJobs(await JoblyApi.getAllJobs());
    }
    search();
  }, []);


  return (
    <div>
    <SearchForm />

    hihi
      {/* {jobs.map(job => ({job}))} */}

   
    </div>
  )
}

export default JobList;

