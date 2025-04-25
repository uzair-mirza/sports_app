import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Cards from '../components/UI/Cards';

function Home() {
  return (
    <>
    {/* <section>
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
                        <Swiper 
                            pagination={true} 
                            loop 
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }} 
                            className="mySwiper">
                            <SwiperSlide><img src="/images/shoe_image.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/shoe_image.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/shoe_image.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/shoe_image.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/shoe_image.png" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
                <Cards />
            </div>
        </div>
    </section> */}
    </>
  )
}

export default Home
