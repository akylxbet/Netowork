import React from 'react';
import s from "../Footer/Footer.module.scss"
import logo from "../../assets/line1.png";
import classNames from 'classnames';

const Footer = () => {
  return (

    <div className={s.principal}>

      <div className={s.container}>
      <div className={s.about}>
        <img src={logo} alt="" />
        <p>
          © 2022 Netowork <br />
          Все права защищены
        </p>
        
      <div className={s.aboutSec}>
        <p>Правила работы сервиса</p>
        <p>Политика конфиденциальности</p>
      </div>
      </div>

      <div className={s.about}>
        <p>О платформе</p>
        <p>Как разместить заказ</p>
        <p>Как получить заказ</p>
        <p>Служба поддержки</p>
      </div>

      <div className={classNames(s.aboutLast, s.about)}>
        <p>Правила работы сервиса</p>
        <p>Политика конфиденциальности</p>
      </div>

      </div>
    </div>

  );
};

export default Footer;