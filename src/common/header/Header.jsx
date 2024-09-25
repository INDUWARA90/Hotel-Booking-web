import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>

            <div className="container mt-4">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">

                    <Link to={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                        <span className="fs-4">Alpine Hotel</span>

                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to={'/'} className="nav-link text-black" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to={'/blog'} className="nav-link text-black">Blog</Link></li>
                        <li className="nav-item"><Link to={'/book'} className="nav-link text-black">Book</Link></li>
                        <li className="nav-item"><Link to={'/contact'} className="nav-link text-black">Contact Us</Link></li>
                    </ul>
                </header>
            </div>

        </>
    )
}

export default Header