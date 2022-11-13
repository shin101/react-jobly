import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function RegisterForm({ signUp }) {
  const [form, setFormData] = useState({});
  const navigate = useNavigate();
  
  function onChange (e) {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data, [name]: value
    }))
  };

  return(
        // upon form submit , hit register endpoint
    <form>
      <div>
        <label>Username</label>
        <input name="username" 
          onChange={onChange}
          value={form.username} 
        />
      </div>
      <div>
        <label>Password</label>
        <input name="password" 
          onChange={onChange}
          value={form.password} 
        />
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
        <button type="submit" onClick={async (e) => {
          e.preventDefault();
          await signUp(form);
          navigate('/login');
        }}>Register</button>
    </form>
  )
}


export default RegisterForm;

