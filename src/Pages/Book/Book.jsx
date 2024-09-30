import React from 'react'
import './book.css'
import Reservation from '../../Reservation-Card/Reservation'

function Book() {
  return (
    <>

        <h3 className='text-center'>Make A Resevation</h3>
        <div className="container mt-5 bg-body-secondary p-5  container-main">
          <div className="container-form">
              
              <div>
                <p>Enter Name :</p>
                <input type="text" placeholder='induwara vishwaknatha' />
              </div>

              <div>
                <p>Enter Email :</p>
                <input type="text" placeholder='info@gmail.com'/>
              </div>

              <div>
                <p>Enter NIC Number :</p>
                <input type="text" placeholder='200304200590'/>
              </div>

              <div>
                <p>Choose Hotel:</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this to select Hotels</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                  <option value="3">Three</option>
                </select>
                
              </div>
              <p className='mt-4'>Choose Room type :</p>
              <div class="btn-group-vertical mt-1" role="group" aria-label="Vertical radio toggle button group">
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked />
                <label class="btn btn-outline-success" for="vbtn-radio1">Premium</label>
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" />
                <label class="btn btn-outline-success" for="vbtn-radio2">Stranded</label>
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off" / >
                <label class="btn btn-outline-success" for="vbtn-radio3">Budget</label>
              </div>

              <div className='Make-Res'>
              <button className='btn-Resevation'>Make Reseveation</button>
              </div>
              
          </div>
        </div>

        {/* My reservations section  display none and when click the reservation dom improt dom to*/}
        <div className='My-reservations mt-5'>
            <h2 className='text-center'>My Reservations</h2>
            
            <div className="row align-content-center justify-content-center">
                  <Reservation />
                  <Reservation />
                  <Reservation />
                  <Reservation />
                  <Reservation />
            </div>
            

        </div>
    </>
  )
}

export default Book