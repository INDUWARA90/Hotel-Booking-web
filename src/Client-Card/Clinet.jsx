import React from 'react'
import './clinet.css'
import clinet01 from '../assets/client-2.jpg'
function Clinet() {
  return (
    <>
     <div className="card" style={{width: "20rem"}}>
  <img src={clinet01} className=" clinet-image-card" alt="..." />
  <div className="card-body d-flex justify-content-between">
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium possimus repellat deserunt magni fugit expedita pariatur, beatae nisi hic placeat eligendi adipisci maxime praesentium laborum officiis rem, ratione illo qui!
    </p>
  </div>
</div>
    
    </>
  )
}

export default Clinet