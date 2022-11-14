import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import JoblyApi from "../API/api"
import UserContext from '../Login/UserContext';


function ProfileForm() {
  const navigate = useNavigate();
  const { currUser, setCurrUser } = useContext(UserContext);

  const initialFormData = {
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    username: currUser.username,
    password: "",
  };

  const [form, setFormData] = useState(initialFormData);

  
  function onChange (e) {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data, [name]: value
    }))
  };

  return(
    <div>
      <h3>Profile</h3>
        <form>
          <div>
            <label>Username</label>
            <p>{ currUser.username }</p>
          </div>
          <div>
            <label>First Name</label>
            <input name="firstName" 
              onChange={onChange}
              value={form.firstName} 
            />
          </div>
          <div>
            <label>Last Name</label>
            <input name="lastName" 
              onChange={onChange}
              value={form.lastName} 
            />
          </div>
          <div>
            <label>Email</label>
            <input name="email" 
              onChange={onChange}
              value={form.email} 
            />
          </div>
          <div>
            <label>Confirm password to make changes:</label>
            <input name="password" 
              onChange={onChange}
              value={form.password} 
            />
          </div>
          <button type="submit" onClick={async (e) => {
            e.preventDefault();
            const newInfo = {
              firstName: form.firstName,
              lastName: form.lastName,
              email: form.email,
              password: form.password
            };

            const username = form.username;
            
            setCurrUser(await JoblyApi.edit(username, newInfo));
            navigate('/companies');
          }}>Save Changes</button>
        </form>
    </div>
  )
}


export default ProfileForm;