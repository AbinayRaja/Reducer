import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
function Headers() {
  return (
    <div>
      <span className='header'>Context API</span>
      <ul className='nav'>
        <li className='prod'>
          <Link to="/">Home Page</Link>
        </li>
        <li className='prod1'>
          <Link to="cart"> Go Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Headers