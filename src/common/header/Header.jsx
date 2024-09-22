import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>

            <div class="container mt-4">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4">

                    <Link to={'/'} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                        <span class="fs-4">Alpine Hotel</span>

                    </Link>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><Link to={'/'} class="nav-link text-black" aria-current="page">Home</Link></li>
                        <li class="nav-item"><Link to={'/blog'} class="nav-link text-black">Blog</Link></li>
                        <li class="nav-item"><Link to={'/book'} class="nav-link text-black">Book</Link></li>
                        <li class="nav-item"><Link to={'/contact'} class="nav-link text-black">Contact Us</Link></li>
                    </ul>
                </header>
            </div>

        </>
    )
}

export default Header