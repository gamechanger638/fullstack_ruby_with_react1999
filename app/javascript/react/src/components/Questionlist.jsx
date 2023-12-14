import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Questionlist = () => {

  const [questionlist, setQuestionlist] = useState([])
  const navigate  = useNavigate()

  const questionurl = 'http://localhost:3000/document'

  // const questionlist = [
  //     {
  //         tittle: {booktittle:"booktittlethis is",
  //     authortittle:"rahul"},
  //         tag:'ruby'
  //     },
  //     {
  //         tittle:"how to create reacr app",
  //         tag:'ruby'
  //     }
  // ]

  const fetchQuestionList = () => {
    fetch(questionurl).
      then((response) => response.json()).
      then((data) => {
        console.log(data)
        setQuestionlist(data)

      })

  }

  useEffect(() => {

    fetchQuestionList()
  }, [])

  const handleUpdate = (elm) => {
    console.log("elm", elm)
    navigate("/about",{state:elm})
  }

  return (  
    <>


      <table className="table">
        <thead>
          <tr>
            <th> name</th>
            <th>document type</th>
            <th>image</th>
            <th>Action</th>

            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {questionlist && questionlist?.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.doc_type}</td>
              <td>{product.image}</td>
              <td>
              <button onClick={() => handleUpdate(product)}>update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>


  )
}

export default Questionlist