import React from 'react'


import slid from "../assets/slid.jpg"
import slide from "../assets/slide.jpg"
import slide1 from "../assets/slide1.png"
import slider3 from "../assets/slider3.jpg"
import suit from "../assets/suit.png"

const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide} className="d-block w-100" style={{ height: '80vh' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Garment</h5>
                            {/* <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide1} className="d-block w-100" style={{ height: '80vh' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Mens Collection</h5>
                            {/* <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slid} className="d-block w-100" style={{ height: '80vh' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Bridal cloths</h5>
                            {/* <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Slider
