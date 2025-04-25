import React from 'react'
import Cards from '../components/UI/Cards'

function About() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className='banner-heading'>
                        <h1>Your Feet Deserve The Best</h1>
                        <p>Your feet deserve the best and we’re here to help you with our shoes. Your feet deserve the best and we’re here to help you with our shoes.</p>
                        <div>
                        <button className="navbar-login">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <img src="/images/shoe-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <Cards />
            </div>
        </div>
    </section>
  )
}

export default About
