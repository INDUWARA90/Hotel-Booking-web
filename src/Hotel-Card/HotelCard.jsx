import React from 'react'
import './card.css'
import cardImage01 from '../assets/hotel-1.jpg'

function HotelCard({ name, location}) {
  return (
    <>
      <div className='col-lg-4 mt-4'>

     <a href="">
          <div className="card  p-2" style={{ width: "20rem" }}>
            <img src={cardImage01} className=" image-card" alt="..." />
            <div className="card-body d-flex justify-content-between">
              <div className="section-A">
                <h4>{name}</h4>
                <p>{location}</p>
              </div>
              {/* <div className="section-B"> Rs.45000</div> */}
            </div>
          </div>
      </a>
      </div>
    </>
  )
}

export default HotelCard  