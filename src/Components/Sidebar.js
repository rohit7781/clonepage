import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const mainMenus = [
        { key:'1', text: 'Home', icon: "fas fa-home" },
        { key:'2', text: 'Explore', icon: "fas fa-chart-line" },
        { key:'3', text: 'Creator Reward', icon: "fas fa-chart-line" },
        { key:'4', text: 'Your Video', icon: "fas fa-video" },
        { key:'5', text: 'Setting', icon: "fas fa-cog" },
    ]
    const secondMenus = [
        { key:'6', text: 'CryptoCurrency', icon: "fab fa-bitcoin" },
        { key:'7', text: 'Music', icon: "fas fa-music" },
        { key:'8', text: 'Entertainment', icon: "fas fa-film" },
        { key:'9', text: 'News', icon: "fas fa-newspaper" },
        { key:'10', text: 'Gaming', icon: "fas fa-gamepad" },
        { key:'11', text: 'Travel', icon: "fas fa-plane-departure" },
        { key:'12', text: 'Fashion', icon: "fas fa-tshirt" },
        { key:'13', text: 'Sports', icon: "fas fa-football-ball" },
    ]
    
    return (
        <div className="sidebar">
            <ul className="menu-group">
                {mainMenus.map(menu => (
                    <li className="menu-item"  key={menu.key}>
                        <i className={menu.icon} ></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <hr/>
            <ul className="menu-group">
                {secondMenus.map(menu => (
                    <li className="menu-item"  key={menu.key}>
                        <i className={menu.icon} ></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <hr/>
            <ul className="menu-group">
            <li className="menu-item mainview">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="text">Log out</span>
                    </li>
                    </ul>
        </div>
    )
}

export default Sidebar
