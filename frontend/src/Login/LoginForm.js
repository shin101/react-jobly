import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function LoginForm({ login }) {
  const [form, setFormData] = useState({});
  const navigate = useNavigate();
  
  function onChange (e) {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data, [name]: value
    }))
  };

  return(
        // upon form submit , hit login endpoint
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
      <button type="submit" onClick={async (e) => {
        e.preventDefault();
        // FIX THIS PART 
        await login(form);
        navigate('/companies');
      }}>Log In</button>
    </form>
  )
}


export default LoginForm;

