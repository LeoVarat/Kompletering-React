import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <NavLink className="navbar-brand" to="/" exact >Uppgift,React</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-4">
                <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active" >Start</NavLink>
                <NavLink className="nav-link" to="/products" exact activeClassName="active">Kunder</NavLink>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
