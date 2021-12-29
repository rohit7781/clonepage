import React from 'react'
import Video from "./Video";
import './VideoRow.css'

const VideosRow = (props) => {
    const { type,videos } = props

    if (type === 'normal') {
        return <div className="videos-row-container">
            <div className="row">
                <div className="videos-row-item">
                    {videos.map(video => (
                        <Video video={video} />
                    ))}
                </div>
            </div>
        </div>
    }

    if (type === 'channel') {
        return <div className="videos-row-label-channel">
            <div className="left">
                <p>Videos To try</p>
            </div>
            <div className="videos-row-container">
                <div className="row">
                    <div className="videos-label-container">
                    </div>
                    <div className="videos-row-item">
                        {videos.map(video => (
                            <Video video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    }

    return (
        console.log('working')
    )
}

export default VideosRow
