import React from 'react'
import VideosRow from '../VideoRow'
import './HomeContent.css'
const HomeContent = () => {
    const len = 370;
    const wid = 220;   
    const len1 = 280;
    const wid1 = 140;
    const recommendedVideos = [
        {
            key:'1',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len}/${wid}`,
            title: "Bitcoin at ATH ",
            length: 'Bitboy',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            key:'12',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len}/${wid}`,
            title: "Top Social Metavese",
            length: 'Sad Gril Indunium',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            key:'11',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len}/${wid}`,
            title: "Ariana Grande ",
            length: 'Tech with me',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const channelVideos = [
        {
            key:'14',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len1}/${wid1}`,
            title: "Top Upcoming Artist",
            length: 'Malfia Astralia',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            key:'15',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len1}/${wid1}`,
            title: "Top Crypto Grapics Designer Today",
            length: 'Crypto Expert',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            key:'16',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len1}/${wid1}`,
            title: "Best Character all the time",
            length: 'Awkard Gyps',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            key:'17',
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/${len1}/${wid1}`,
            title: "Top Upcoming Phones",
            length: 'TechBurner',
            channel: {
                name: "Ariana Grande",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const marqChan = {
        name: "Marques Brownlee",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: "https://picsum.photos/30/30"
    }
    return (
        <div className="home-content">
            <VideosRow 
                type= "normal"
                label= "Recommended"
                videos= {recommendedVideos}
            />

            <VideosRow
                type= "channel"
                channel= {marqChan}
                videos= {channelVideos} />
        </div>
    )
}

export default HomeContent
