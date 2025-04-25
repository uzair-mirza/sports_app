import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer-bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <div className='footer-logo mb-4'>
                        <NavLink><img src="/images/logo.png" alt="" /></NavLink>
                    </div>
                    <p className='footer-list'>© 2024 Website,  All rights reserved</p>
                </div>

                <div class="col-md-2">
                    <h5 className='footer-headings'>Quick Links</h5>
                    <ul className="list-unstyled footer-list">
                        <li><NavLink to="/" className="text-decoration-none">Assignment</NavLink></li>
                        <li><NavLink to="/services" className="text-decoration-none">Prediction</NavLink></li>
                        <li><NavLink to="/contact" className="text-decoration-none">Team</NavLink></li>
                        <li><NavLink to="/about" className="text-decoration-none">Championship</NavLink></li>
                        <li><NavLink to="/about" className="text-decoration-none">Countries</NavLink></li>
                    </ul>
                </div>

                <div class="col-md-2">
                    <h5 className='footer-headings'>Other Pages</h5>
                    <ul className="list-unstyled footer-list">
                        <li><NavLink to="/" className="text-decoration-none">Global Rating</NavLink></li>
                        <li><NavLink to="/services" className="text-decoration-none">News</NavLink></li>
                        <li><NavLink to="/contact" className="text-decoration-none">Get Fan ID Card</NavLink></li>
                    </ul>
                </div>

                <div class="col-md-2">
                    <h5 className='footer-headings'>Policies</h5>
                    <ul className="list-unstyled footer-list">
                        <li><NavLink to="/" className="text-decoration-none">Privacy Policy</NavLink></li>
                        <li><NavLink to="/services" className="text-decoration-none">Refund & Cancel</NavLink></li>
                        <li><NavLink to="/contact" className="text-decoration-none">Terms &  Conditions</NavLink></li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <h5>Subscribe</h5>
                </div>

            </div>

        </div>
    </footer>
  )
}

export default Footer
