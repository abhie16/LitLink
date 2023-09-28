import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'
import { useSelector } from 'react-redux';

function Layout({children}) {

    const {user} = useSelector((state) => state.user);
    const location = useLocation();

    const userMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-line'
        },
        {
            name: 'Books',
            path: '/books',
            icon: 'ri-booklet-line'
        },
        {
            name: 'Authors',
            path: '/authors',
            icon: 'ri-user-line'
        },
        {
            name: 'Logout',
            path: '/logout',
            icon: 'ri-logout-box-line'
        }
    ]

    const menuToBeRendered = userMenu;

  return (
    <div className='main'>
        <div className='d-flex layout'>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h1>LitLink</h1>
                </div>
                <div className='menu'>
                    {menuToBeRendered.map((menu) =>{
                        const isActive = location.pathname === menu.path;
                        return(
                            <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    <div className='d-flex flex-row-reverse'>
                        <Link to='/profile' className='user-name'>{user?.name.split(" ")[0]}</Link>
                        <i className="ri-notification-2-line h4 px-3"></i>
                    </div>
                </div>
                <div className='body'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout