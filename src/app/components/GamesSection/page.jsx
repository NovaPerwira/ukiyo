'use client'
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
    useEffect(() => {
        new Swiper(".swiper-container", {
            direction: "vertical",
            loop: true,
            autoplay: {
                delay: 4859,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            simulateTouch: true,
        });
    }, []);

    return (
        <section className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: "url('images/slider-1-slide-2-1770x742.jpg')" }}>
                    <div className="content">
                        <h1>Mobile App Development</h1>
                        <p>Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.</p>
                        <a href="#" className="button">Get in touch</a>
                    </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: "url('images/slider-1-slide-4-1770x742.jpg')" }}>
                    <div className="content">
                        <h1>Experienced Team</h1>
                        <p>We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life.</p>
                        <a href="#" className="button">Get in touch</a>
                    </div>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: "url('images/slider-1-slide-6-1770x742.jpg')" }}>
                    <div className="content">
                        <h1>Award-Winning Software</h1>
                        <p>The software solutions developed by our company have been numerously awarded for usability and innovative features.</p>
                        <a href="#" className="button">Get in touch</a>
                    </div>
                </div>
            </div>
            {/* Pagination and Navigation */}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </section>
    );
};

export default SwiperSlider;