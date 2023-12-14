import { useState} from 'react'
import React from 'react'

import * as ReactDOM from 'react-dom'

const Product = () => {

    const[docnames, setdocname]= useState('');
    const[document, setDocument] =useState(''); 
    const[image, setImage] =useState('');

    const handleNameChange =(event) =>{
        setdocname(event.target.value)
    }

    const handleImageChange =(event) =>{
        setImage(event.target.value)
    }

    const handleDocumentChange = (event)=>{
        setDocument(event.target.value)
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
                'name':docnames,
                'doc_type':document,
                'image':image
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
    <>Product
    <div className='login-form-parent'>
     <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="Firstname">  Name:</label>
          <input
            type="Name"
            id="Name"
            value={docnames}
            onChange={handleNameChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="Lastname">document type:</label>
          <input
            type="Lastname"
            id="Lastname"
            value={document}
            onChange={handleDocumentChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="Lastname"> Image:</label>
          <input
            type="Lastname"
            id="Lastname"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
     </div>
    </div></>
  )
}

export default Product