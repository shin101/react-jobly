import React, { useState } from "react";

function SearchForm({ query }){
  const [search, setSearch] = useState("");
  
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };


  return (
    <form onSubmit = {handleSubmit}>
      <input 
      placeholder="keyword here" 
      onChange={handleChange}/>
      
      <button>Search</button>
    </form>
  )
};

  

export default SearchForm;