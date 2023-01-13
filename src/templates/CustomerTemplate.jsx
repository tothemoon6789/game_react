import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class CustomerTemplate extends Component {
    render() {
        return (
            <div className='container'>

         
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet/>
            </div>

        );
    }
}

export default CustomerTemplate;