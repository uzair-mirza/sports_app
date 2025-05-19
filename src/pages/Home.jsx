import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <section className=''>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <div className='bg-white links_sec'>
                        <div className=''>
                            <h3><img className='me-2' src="/images/quick.png" alt="" />Quick Links</h3>
                        </div>
                        <div className='main_side_bar'>
                            <ul>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/live_pic.png" alt="" className='me-2' />Live Now</NavLink></li>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/ass_pic.png" alt="" className='me-2' />Assignment</NavLink></li>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/predict_pic.png" alt="" className='me-2' />Predictions</NavLink></li>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/team_pic.png" alt="" className='me-2' />Team</NavLink></li>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/top_pic.png" alt="" className='me-2' />Top Championships</NavLink></li>
                                <li><NavLink to="/" className="text-decoration-none"><img src="/images/countries_pic.png" alt="" className='me-2' />Top Countries</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* */}
                    <div className='bg-white links_sec mt-3'>
                        <div className='main_side_bar'>
                            <ul>
                                <li><NavLink to="/" className="text-decoration-none">Get your Fan ID Card</NavLink></li>
                                <li className='mb-0 text-end'><NavLink to="/" className="text-decoration-none"><img src="/images/fanid_pic.png" alt=""  /></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                    {/* */}
                    <div className='bg-white links_sec mt-3'>
                        <div className='main_side_bar'>
                            <ul>
                                <li><NavLink to="/" className="text-decoration-none">Vote your Favorite Player</NavLink></li>
                                <li className='mb-0 text-end'><NavLink to="/" className="text-decoration-none"><img src="/images/fav_pl_pic.png" alt=""  /></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                </div>
                <div className="col-lg-6">

                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
