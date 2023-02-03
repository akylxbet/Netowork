import React from 'react';
import s from './Inputs.module.scss'
const Inputs = ({children}) => {
    return (
        <div className={s.Inputs}>
            <div className={s.container}>
               <p>{children}</p>
               <input 
                className={s.input}
                type="text" />
            </div>
        </div>
    );
};

export default Inputs;