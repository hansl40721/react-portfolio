import React from 'react';
import '../style/style.css'
import petstagram from '../assets/petsagram.png'
import weather from '../assets/weather.png'
import travelBuddy from '../assets/travel-buddy.png'

const Portfolio = () => {
    const portfolioProjects = [
        {
            id: 1,
            title: 'Petstagram',
            image: petstagram,
            link: "https://github.com/hansl40721/weather-dashboard.git"
        },
        {
            id: 2,
            title: 'Weather Dashboard',
            image: weather,
            link: "https://github.com/hansl40721/weather-dashboard.git"
        },
        {
            id: 3,
            title: 'TravelBuddy',
            image: travelBuddy,
            link: "https://github.com/ellacheu/TravelBuddy-Express.git"
        }
    ];

    return (
        <div className='portfolio'>
            <h1>Porfolio</h1>
            {portfolioProjects.map(project => (
                <div key={project.id} className='project'>
                    <a target='_blank' href={project.link}>
                        <img className='projectImg' src={project.image} alt="project image" />
                    </a>
                    <h2>{project.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;