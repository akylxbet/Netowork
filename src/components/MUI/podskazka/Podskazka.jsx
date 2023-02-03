import React, { useState } from 'react';
import s from "./Podskazka.module.scss"

const Podskazka = ({children}) => {
    const [isActive, setIsActive] = useState(null)
    return (   
        <button 
        onClick={() => setIsActive('')}
        className={
                isActive === null ? s.btn : s.btn && s.btnActive
            }>
    
        </button>   
    )}

export default Podskazka;