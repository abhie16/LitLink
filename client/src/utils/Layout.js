import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Layout.css'
import { useSelector } from 'react-redux';

function Layout({children}) {

    const {user} = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

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
        }
    ]

    const adminMenu = [
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
            icon: 'ri-shield-user-line'
        },
        {
            name: 'Users',
            path: '/users',
            icon: 'ri-user-line'
        },
        {
            name: 'Orders',
            path: '/orders',
            icon: 'ri-book-read-line'
        }
    ]

    const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;

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
                            <div className={`d-flex menu-item `} onClick={() =>{
                                localStorage.removeItem('token');
                                navigate('/login');
                            }}>
                                <i className='ri-logout-box-line'></i>
                                <Link to='/login'>Logout</Link>
                            </div>
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