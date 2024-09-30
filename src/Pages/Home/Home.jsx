import React from 'react'
import './home.css'
import headerImage from '../../assets/header.jpg'
import HotelCard from '../../Hotel-Card/HotelCard'
import Clinet from '../../Client-Card/Clinet'
import HotelArray from '../../Data/hotelData'


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
          <div className="container row  align-content-center m-lg-4">
            {
              HotelArray.map((hotel,index)=>{
                return <HotelCard key={index} name={hotel.name} location={hotel.location} />
              })
            }
          
          </div>
              
      </div>
      
      <h1 className='text-center mb-4'>Clients Feedback</h1>
      <div className='Clinet-feedback bg-body-secondary p-5'>
          
          <div className="container row col-7 align-content-center gap-3">
            < Clinet />
            < Clinet />
          
          </div>   
      </div>

      <div className="container bg-body-secondary mt-5">
                <div className="rewards bg-body-secondary text-center p-5">
                          <p>100+ discounts codes</p>
                          <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente esse maiores officia debitis
                          </h2>
                          <button className='join-button'>join rewards</button>
                </div>  
      </div> 
    </>
  )
}

export default Home