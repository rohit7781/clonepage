import React from 'react'
import './Video.css'
const Video = (props) => {
    const { video } = props
    const { thumbnail, title, channel , length } = video




    return (
        <div className="video">
            <div className="thumbnail">
                <img src={thumbnail} alt='/youtube.com' />
            </div>
            <div className="left">
                <div>
                    <img src={channel.image} className="avatar" alt='/youtube.com' />
                </div>
                <div className="newmain">
                    <h4 className="title">{title}</h4>
                    <p className="video-info">
                        <span >{length}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
