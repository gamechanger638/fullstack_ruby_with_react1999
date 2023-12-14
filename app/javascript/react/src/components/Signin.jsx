import axios from 'axios';
import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'



const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate()

  const handleEmailchange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordchange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      'email': email,
      'password': password,
    }
    axios.post('http://localhost:3000/auth/login', payload).then((res) => {
      if(res.status=== 200){
        localStorage.setItem("userToken",res.data.token)
        navigate("/signup")
      }
    })


    // fetch('http://localhost:3000/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    //   body: JSON.stringify()
    // })
    //   .then((res) => {
    //     const response = res.json()
    //     console.log("super", res)
    //   })
    //   .then(data => console.log("user name", data))
    //   .catch(error => console.log(error));
  }

  return (
    <>
      <style>

      </style>
      <div className="bdy">
        <div className="wrapper">
          <div className="form-box login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailchange}
                  required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </span>
                <input type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordchange}
                  required />
                <label>Password</label>
              </div>
              <p>Don't have an account? <Link to="/signup">Sign-Up</Link></p>
              <button type="submit" className="btnn">Submit</button>
            </form>
          </div>
        </div>
      </div></>
  )
}

export default Signin