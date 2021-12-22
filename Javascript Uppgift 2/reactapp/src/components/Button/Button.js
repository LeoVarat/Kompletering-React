import React from 'react'
import { NavLink } from 'react-router-dom'


const Button = () => {
    return (
        <div>
            <NavLink className="extraLink" to="/products" exact>
              <p> <b> Klicka här för att komma till kunder!</b></p>
            </NavLink>
        </div>
    )
}

export default Button
