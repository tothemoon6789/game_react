import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Answer</Link>
                    </li>
                    <li>
                        <Link to={"/review"}>Review</Link>
                    </li>
                 
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;