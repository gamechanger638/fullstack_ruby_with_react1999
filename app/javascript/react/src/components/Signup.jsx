import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [userdetails ,setUserdetails] = useState([])

    const handleNameChange = (event)=>
    {

      
    }

    

    const handleSubmit =(event)=>{
        console.log('test1')
        event.preventDefault();
        console.log('Name:',docnames);
        console.log('Document type:', document);
        console.log('image:', image);


        fetch('http://localhost:3000/product',{
            method:'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
            body:JSON.stringify({
                'name':fname,
                'username':username,
                'email':email,
                'password':password,
                'password_confirmation':password_confirmation
            })
        })
        .then((res)=>{
          const response =res.json()
           console.log(response)
        })
        .then(response => {response.json()})

        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

  return (
    <>
    <div className="bdy">
    <div className="wrapper">
        <div className="form-box login">
            <h1>Sign-Up</h1>
            <form  onSubmit={handleSubmit}>
                <div className="input-box">
                    <span className="icon"><i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <input  
                     type="Name"
                     id="Name"
                     value={docnames}
                     onChange={handleNameChange}
                     required/>
                    <label>Name</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <input type="text" required/>
                    <label>username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box inpbx">
                    <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <input type="tel" required/>
                    <label> password</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    </span>
                    <input type="password" required/>
                    <label>Password confirmation</label>
                </div>
                <p>Already have an account? <Link to="/signin">Log In</Link></p>
                <button type="submit" className="btnn">Submit</button>
            </form>
        </div>
    </div>
</div>  </>
  )
}

export default Signup