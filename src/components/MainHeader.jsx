import React from 'react'
import '../pages/home/home.css'

import {Link} from 'react-router-dom'
import Image from '../images/berbawyonlylogo.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Engineering</h4>
          <h1>Get started accessing the Maker Space today!</h1>
          <p>This is a free resource offered by Mrs. Berbawy at Irvington High School. Go to <a href="https://berbawy.com" target="_blank">berbawy.com</a> to learn more about all of the other programs.</p>
          <Link to="/poster" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt='Main Header Image' className="main__header-direct-image"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader