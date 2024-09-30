import React from 'react'


function Reservation() {
    return (

        <>  
            <div className="card col-sm-12 ms-5 mt-3  col-lg-4 m-lg-5   col-md-3 m-md-4" style={{width: '22rem'}}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Resevation Number : <span>Res0001</span></h5>
                    <p className="card-text">

                        <p>Hotel Name :<span>Hotel 01</span> </p>
                        <p>Hotel Room Type :<span>Hotel 01</span> </p>
                        <p>Customer Name :<span>Hotel 01</span> </p>
                        <p>NIC Number :<span>Hotel 01</span> </p>
                        <p>Email :<span>Hotel 01</span> </p>
                    </p>
                    <a href="#" className="btn btn-danger w-100 mt-4">Remove reservation</a>
                </div>
            </div>
        </>
    )
}

export default Reservation