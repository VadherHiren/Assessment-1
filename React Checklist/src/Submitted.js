import React from 'react'
import { Link } from 'react-router-dom'

function Submitted() {
  return (
    <div className='container py-5 w-50'>
        <div class="row justify-content-center align-items-center">
            <div class="col col-lg-12 py-5">        
            <h3 className='text-secondary'>Thanks For Submitting the Form</h3>
            <h4>Want To Go Back</h4>
            <Link to='/'><button className='btn btn-outline-success'>Click Here</button></Link> 
            </div>
        </div>
      
    </div>
  )
}

export default Submitted
