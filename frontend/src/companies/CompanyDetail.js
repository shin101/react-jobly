import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from "../API/api"
import JobList from '../jobs/JobList';

function CompanyDetail(){
  const { id } = useParams();
  const [company, setCompany] = useState(null);


  useEffect(() => {
    async function search(){
      setCompany(await JoblyApi.getCompany(id));
    }
    search();
  }, [id]);

  return (
    <div> 
      {company 
        ? <div>
            <h3>{company.name}</h3>
            {/* {company.jobs.map(j => <p> <b>{j.title}</b>
            <p>Salary: {j.salary}</p>  <p>Equity: {j.equity}</p> */}
            <JobList jobs={company.jobs} />
          </div>
        : <p>loading</p>
      }
    </div>
  );
}

export default CompanyDetail;