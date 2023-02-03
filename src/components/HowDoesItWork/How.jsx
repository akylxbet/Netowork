import React from 'react';
import s from './How.module.scss'
import HowFirst from '../../assets/HowFirst.png'
import HowSecond from '../../assets/HowSecond.png'
import HowThird from '../../assets/HowThird.png'
const How = () => {
    return (
        <div className={s.How}>
            <div className={s.container}>
                <div className={s.title}>
                <h1>Как работает сервис?</h1>
                </div>
                <div className={s.blocks}>
                    <div className={s.block}>
                        <h1>Опишите услугу</h1>
                        <p>Опишите свою задачу и условия.<br/>Это бесплатно и займёт 3‑4 минуты</p>
                        <img className={s.block_img}src={HowFirst} alt="" />
                    </div>
                    <div className={s.block}>
                        <h1>Получите отклики</h1>
                        <p>Отклики с ценами от исполнителей.<br/>Обычно они приходят в течение 30 минут</p>
                        <img className={s.block_img}src={HowSecond} alt="" />
                    </div>
                    <div className={s.block}>
                        <h1>Получите отклики</h1>
                        <p>Выберите подходящего исполнителя
<br/>и обсудите сроки выполнения</p>
                        <img className={s.block_img}src={HowThird} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;