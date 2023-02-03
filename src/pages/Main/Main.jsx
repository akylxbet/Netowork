import React, { useState } from "react";
import Header from "../../components/HeaderTwo/Header";
import Service from "../../components/Service/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import s from "./Main.module.scss";
import Frame from "../../components/Frame/Frame";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import How from "../../components/HowDoesItWork/How";
import Auth from "../Auth";

const Main = () => {
  const peopleArray = [
    {
      imgFirst: require("./../../pictures/Cart1.png"),
      img: require("./../../pictures/cartAssets/LogoPeople1.png"),
      name: "Максим Фролов",
      id: 1,
    },
    {
      imgFirst: require("./../../pictures/Cart2.png"),
      img: require("./../../pictures/cartAssets/LogoPeople2.png"),
      name: "Михаил Баринов",
      id: 1,
    },
    {
      imgFirst: require("./../../pictures/Cart3.png"),
      img: require("../../assets/Ilgiz.png"),
      name: "Илгиз Арыкбаев",
      id: 1,
    },
    {
      imgFirst: require("./../../pictures/Cart4.png"),
      img: require("./../../pictures/cartAssets/LogoPeople3.png"),
      name: "Александр Громов",
      id: 1,
    },
  ];

  return (
    <div className={s.main}>
      <Header />
      <Service />
      <Auth/>
      <div className={s.main_frame}>
        <h1 className={s.card_main_text}>Наши лучшие исполнители</h1>

        <div className={s.frame}>
          {peopleArray.map((item) => (
            <Frame name={item.name} img={item.img} imgFirst={item.imgFirst} />
          ))}
        </div>

        <div className={s.frame}>
          {peopleArray.map((item) => (
            <Frame name={item.name} img={item.img} imgFirst={item.imgFirst} />
          ))}
        </div>
      </div>

      {/* Slaider */}

      <div className={s.slaider}>
        <h1 className={s.card_main_text}>Наши лучшие исполнители</h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Frame />
          </SwiperSlide>
        </Swiper>
      </div>
      <Categories />
      <How />
      <Footer />
    </div>
  );
};

export default Main;
