import React from "react";
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Image1 from "./images/Cover.jpg";
import Image2 from "./images/image1.jpg";
import Image3 from "./images/image2.jpg";
import Image4 from "./images/image3.jpg";
import Image5 from "./images/LYD03157.jpg";
import Video from "./images/cover.mp4";

function Gallery() {
  return (
    <div className="Gallery">
      <div className="Heading">
        <h2>Gallery</h2>
        <p>Here you can see some of our works</p>
      </div>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={Image1} alt="Cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="Image1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="Image2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} alt="Image3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image5} alt="Image4" />
          </SwiperSlide>
          <SwiperSlide>
            <video controls>
              <source src={Video} type="video/mp4" />
            </video>
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination">
                
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
