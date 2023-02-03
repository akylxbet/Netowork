import React from 'react';
import s from './Auth.module.scss'
import Inputs from '../../components/MUI/Inputs/Inputs';

const Auth = () => {
    return (
        <div className={s.Auth}>
            <div className={s.container}>
                <h1>Авторизация</h1>
                <Inputs>Email</Inputs>
            </div>
        </div>
    );
};

export default Auth;