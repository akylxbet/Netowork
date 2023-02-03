import React, { useRef, useState } from "react";
import s from "./Frame.module.scss";
import cart1 from './../../pictures/Cart1.png'
import cart2 from './../../pictures/Cart2.png'
import cart3 from './../../pictures/Cart3.png'
import cart4 from './../../pictures/Cart4.png'
import shop from './../../pictures/Shop.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slide.css'
import { Autoplay, Pagination, Navigation } from "swiper";

const Frame = ({name, img, imgFirst}) => {
  console.log(imgFirst)
  
    return (
        <div className={s.card}>
            <div className={s.itemFirst}>
                <img className={s.shop} src={shop} alt="" />
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  className={s.slider_img} src={imgFirst} alt="#" /></SwiperSlide>
        <SwiperSlide><img  className={s.slider_img} src={imgFirst} alt="#" /></SwiperSlide>
        <SwiperSlide><img  className={s.slider_img} src={imgFirst} alt="#" /></SwiperSlide>
       <SwiperSlide><img  className={s.slider_img} src={imgFirst} alt="#" /></SwiperSlide>
      </Swiper>
            </div>

            <div className={s.itemSecond}>
                <div>
                <img className={s.logo} src={img} alt="" />

                 <h3 className={s.name}>{name}</h3>

                </div>

                <div className={s.btn_container}>
                    <button className={s.button}>Перейти в портфолио</button>
                </div>
              

            </div>
            
        </div>
    );
};

export default Frame;

