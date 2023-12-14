import  React from 'react'
import * as ReactDOM from 'react-dom/client'
import Questionlist from './Questionlist'
import Header from './Header';
import Document from './Document';
import Leave from './Leave';
import Signin from './Signin';
import Contact from './Contact';
import Catalog from './Catalog';
import Product from './Product';
import User from './User';
import Signup from './Signup';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const Welcome = () => {
  return (

<>
<Router>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Questionlist/>} />
        <Route path="/about" element={<Document/>} />
         <Route path="/leave" element={<Leave/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path ="/product" element={<Product/>}/>
        <Route path ="/catalog" element={<Catalog/>}/>
        <Route path ="/user" element={<User/>}/> 


      </Routes>
    </Router>  
 
 
 
</>
       
     
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
    <Welcome/>
    </React.StrictMode>
   
)

// document.addEventListener('DOMContentLoaded', ()=>{
//     ReactDOM.render(<Welcome/> , document.getElementById('welcome'))
// })
export default Welcome 