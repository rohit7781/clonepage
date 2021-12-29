import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const mainMenus = [
        { text: 'Home', icon: "fas fa-home" },
        { text: 'Explore', icon: "fas fa-chart-line" },
        { text: 'Creator Reward', icon: "fas fa-chart-line" },
        { text: 'Your Video', icon: "fas fa-video" },
        { text: 'Setting', icon: "fas fa-cog" },
    ]
    
    return (
        <div className="sidebar">
            <ul className="menu-group">
                {mainMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
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
