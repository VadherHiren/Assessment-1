import React, { createContext, useContext, useState } from 'react'


const CheckContext = createContext()

function CheckListProvider({ children }) {
  const [citizen, setCitizen] = useState("")
  const [age, setAge] = useState("")

  return (
    <CheckContext.Provider value={{ citizen, setCitizen, age, setAge }}>{children}</CheckContext.Provider>
  )
}

function Form() {
  const { citizen, setCitizen, age, setAge } = useContext(CheckContext)


  return (
    <div className='container mt-5 w-50 text-center'>
      <h3>Checklist</h3>
      <div className='row  justify-content-center'>
        <div>
          <span className='fw-bold '>Are You Citizen ? {citizen ? "Yes" : "No"}</span>
          <br />
          <span className='fw-bold '>Are You Over 21 ? {age ? "Yes" : "No"}</span>
        </div>
        <div>
          <span className='fw-bold'>Are You Citizen ? <input type="checkbox" onChange={(e) => setCitizen(e.target.checked)} /></span>
          <br />
          <span className='fw-bold'>Are You Over 21? <input type="checkbox" onChange={(e) => setAge(e.target.checked)} /></span>
        </div>
      </div>

    </div>
  )
}
export { CheckListProvider }
export default Form