import React from 'react'
import './footer.css'

function footer() {
  return (
    <>
    <div className='footer-test'>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 bg-body-secondary p-5 m-1" style={{borderRadius:"5px"}}>
          <div className="col mb-4">
            <h3 className='mb-3'>Alpine Hotels</h3>
            <p className="text-body-secondary " style={{width:"380px"}}>
              Alpine Hotels is a Premier hotel booking website that offers a seamless and convenient way to find that book accommodations worldwide. <br /><br />
              with a user-friendly interface and a vast selection of hotels.Alpine Hotels aim to provide a stress-free experience travelers seeking the perfect stay.
            </p>
          </div>

          <div className="col mb-3">

          </div>

          <div className="col mb-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">our Team</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Book</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact us</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Legal</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Social Media</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help Center</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">PartnerShips</a></li>
            </ul>
          </div>
        </footer>
      </div>

    </>
  )
}

export default footer