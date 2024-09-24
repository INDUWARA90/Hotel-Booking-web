import React from 'react'
import './home.css'
import headerImage from '../../assets/header.jpg'


function Home() {
  return (
    <>
      <div className="container">
        <img src={headerImage}/>
          <div className="inner-welcome-image" >
                  <h1>Enjoy Your Dream</h1>
                  <h1>vacation</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus qui esse.</p>
          </div>
      </div>

    </>
  )
}

export default Home