
import React from 'react'
import * as ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const Document = () => {
  const location = useLocation()
  // const {id="", name=""}=  location?.state
  const { id, name } = location?.state || {}
  // console.log("location  =====" , id);

  const [docnames, setdocname] = useState(location.state ? name :'');
  const [document, setDocument] = useState('');
  const [image, setImage] = useState("");
  const param = useParams()
  console.log("param", param)
  console.log("location", location)
  const handleNameChange = (event) => {
    setdocname(event.target.value)
  }
  console.log("imageimageimage",image)

  const handleImageChange = (event) => {
    console.log("target", event)
    setImage(event.target.files[0]);
  }

  const handleDocumentChange = (event) => {
    setDocument(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log('test1')
    event.preventDefault();
    console.log('Name:', docnames);
    console.log('Document type:', document);
    console.log('image:', image);


    fetch('http://localhost:3000/document', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        'name': docnames,
        'doc_type': document,
        'image': image
      })
    })
      .then((res) => {
        const response = res.json()
        console.log(response)
      })
      .then(response => { response.json() })

      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  const handleUpdate = () => {
    const payload = {
      "name": docnames,
      "doc_type": document,
      "image": image
    }
    console.log("payload", payload)
    axios.put(`http://localhost:3000/document/${id}`, payload).then((res) => {
      console.log("res", res)
    }
    )
  }

  return (
    <>
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
                type="file"
                // value={image}
                onChange={handleImageChange}
              />
            </div>
            <button type='submit'>Login</button>

          </form>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </>
  )
}

export default Document