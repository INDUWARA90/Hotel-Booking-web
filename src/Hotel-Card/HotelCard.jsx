import React from 'react'
import './card.css'
import cardImage01 from '../assets/hotel-1.jpg'

function HotelCard() {
  return (
    <>
   <div className="card" style={{width: "20rem"}}>
  <img src={cardImage01} className=" image-card" alt="..." />
  <div className="card-body d-flex justify-content-between">
    <div className="section-A">
      <h4>Hotel Alpine</h4>
      <p>Trincomale,Sri Lanka</p>
    </div>
    <div className="section-B"> Rs.45000</div>
  </div>
</div>
    </>
  )
}

export default HotelCard  