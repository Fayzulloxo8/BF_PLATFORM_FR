import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
    const [nav, setNav] = useState([])

    useEffect(() => {
        fetch('https://bf-platform-bk.onrender.com/categories/')
            .then(response => response.json())
            .then(data => setNav(data))
            .catch(error => console.error('Hatolik', error))
    }, [])

    return (
        <>
            <nav>
                <div className='logo'>
                    <p><span>F</span>-platform.com</p>
                </div>
                <div className='nav-menu'>
                    {nav && nav.map((item, index) => (
                        <Link to={`#category-${item.id}`} key={index}>{item.name}</Link>

                    ))}
                </div>
            </nav>
            <div className='nav'>
                <div className='nav-imgs'>
                    <Link to=''>
                        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4avw2z-nYaUOS3dRsus495rLYKWrIO9r9LA&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4avw2z-nYaUOS3dRsus495rLYKWrIO9r9LA&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link><Link to=''>
                        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4avw2z-nYaUOS3dRsus495rLYKWrIO9r9LA&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4avw2z-nYaUOS3dRsus495rLYKWrIO9r9LA&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link><Link to=''>
                        <img src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4avw2z-nYaUOS3dRsus495rLYKWrIO9r9LA&s" alt="" />
                    </Link>
                    <Link to=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="" />
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Nav
