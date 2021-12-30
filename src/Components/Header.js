import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
         
                    <i className="fas fa-bars"></i>
         
                <img className="logo" src="https://logos.textgiraffe.com/logos/logo-name/Lolly-designstyle-pastel-m.png" alt='https://logos.textgiraffe.com/logos/logo-name/Lolly-designstyle-pastel-m.png' />
            </div>
            <div className="header-center">
                <div className="search">
                    <input type="text" placeholder="Search a video" className="search-box" />
                    <button className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <i class="fas fa-video"></i>
                    <i className="fas fa-bell"></i>
                    <img className="avatar" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' />
                </div>

            </div>

        </div>
    )
}

export default Header
