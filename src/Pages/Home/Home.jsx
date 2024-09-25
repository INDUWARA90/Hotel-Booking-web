import React from 'react'
import './home.css'
import headerImage from '../../assets/header.jpg'
import HotelCard from '../../Hotel-Card/HotelCard'



function Home() {
  return (
    <>
      <div className="container">
        <img src={headerImage} className='header-image'/>
          <div className="inner-welcome-image" >
                  <h1>Enjoy Your Dream</h1>
                  <h1>vacation</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus qui esse.</p>
          </div>

        

      </div>
      
      <div className='About-Hotels'>
          <h1 className='text-center'>Our Hotels</h1>
          <div className="container row col-7 align-content-center gap-3">
          <HotelCard />
          </div>
              
      </div>
      
    </>
  )
}

export default Home