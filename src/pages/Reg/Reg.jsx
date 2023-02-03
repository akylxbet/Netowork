import React, { useState } from 'react';
import s from "./Reg.module.scss"
const Reg = () => {
    const [isReg, setReg] = useState(false);
    return (
        <div className={s.Reg}>
            <div className={s.container}>
                <h1>Регистрация</h1>
                <div className={s.buttons}>
                    <button className={s.btn}>Я фрилансер</button>
                    <button className={s.btn}>Я заказчик</button>
                </div>
            </div>
        </div>
    );
};

export default Reg;