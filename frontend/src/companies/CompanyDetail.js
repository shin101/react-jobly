import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from "../API/api"

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
      {company ? 
        <div>
          <h3>{id}</h3>
          {company.name}
          {company.jobs.map(j => <p>{j.title}: {j.salary} {j.equity}</p>)}
        </div>
      : <p>loading</p>}
    </div>
  );
}

export default CompanyDetail;