import React, {useEffect, useState} from "react";
import JoblyApi from "../API/api"
import JobCard from "./JobCard";


function JobList({ jobs }) {
  const [jobList, setJobList] = useState(jobs || []);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function search(){
      setJobList(await JoblyApi.getAllJobs());
    }

    if (!jobList.length) {
      search();
    }
  }, [jobList.length]);


  return (
    <div>
      {jobs ? null :
        <>
          <input 
            onChange={(e) => 
            setSearchTerm(e.target.value)}
            name="search-term"
            value={searchTerm}
          />
          <button type="submit" onClick={async e=> {
            e.preventDefault();
            setJobList(await JoblyApi.getAllJobs({ title: searchTerm }));
          }}>Search</button>
        </> 
      }
      {jobList.map(job =>(<JobCard key={job.id} {...job} />))}

   
    </div>
  )
}

export default JobList;

