import React from 'react';
import s from "./Header.module.scss"
import logo from "../../assets/logo.png"
import { useLocation, useNavigate} from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate() 
    const locate = useLocation()
    return (
        <div className={s.Header}>
            <div className={s.Header_cont}>
                <div className={s.logo}>
                    <img className = {s.logo_img} src={logo} alt="" />
                </div>
                <div className={s.navigation}>
                    <ul>
                        <li>Создать задание</li>
                        <li>Найти задание</li>
                    </ul>
                </div>
                    <button onClick={() => navigate('/Reg')}>Вход и регистрация</button>
            </div>
        </div>
        
    );
};

export default Header;