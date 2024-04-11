import React from 'react';
import '../style/style.css'
import me from '../assets/Me.jpg'

const About = () => {
    return (
        <div className="about">
            <h1>About Lucas</h1>
            <p>
                Lucas is a full-stack software developer with experience building RESTful API and MERN applications. He has experience
                working with technologies such as Java, JavaScript, HTML, CSS, Node, Express, SQL/Sequelize, MongoDB, GraphQL, JWT, Jest, PWAs, React and more.
            </p>
            <img src={me} alt="Lucas Hansen" />
        </div>
    );
}

export default About;