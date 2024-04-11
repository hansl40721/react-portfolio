import React from 'react';
import '../style/style.css';

const Resume = () => {
    const education = [
        {
            id: 1, 
            title: 'University of Minnesota, Minneapolis, MN',
            description: 'Full Stack Web Development Certificate',
            points: []
        },
        {
            id: 2,
            title: 'Marquette University, Milwaukee, WI',
            description: 'Bachelor of Arts, Majors: Public Relations, English',
            points: [
                'Awards: Père Marquette Award'
            ]
        }
    ]
    const workExperiences = [
        {
            id: 1,
            title: 'The Copperfield',
            description: 'Server, September 2021 - Present',
            points: [
                'Works in fast-paced, customer-oriented environment',
                'Developed and polished key communication skills',
                'Established proficiency with data management software and POS systems',
                'Practiced high level time-management and multi-tasking skills daily'
            ]
        },
        {
            id: 2,
            title: 'Muy Pizza',
            description: 'Delivery Driver, January 2021 - August 2021',
            points: [
                'Worked in fast-paced, time-sensitive environment',
                'Cash handling',
                'Managed multiple responsibilities independently',
            ]
        },
        {
            id: 3,
            title: 'Arcanum Consulting',
            description: 'Marketing/Sales Associate, August 2020 - October 2020',
            points: [
                'Developed and executed event marketing campaigns in local retail stores',
                'Worked with national brands like Target, Sam\'s Club and AT&T',
                'Developed and evaluated marketing systems, worked with management to teach systems to new hires',
            ]
        },
        {
            id: 4, 
            title: 'Milwaukee Admirals',
            description: 'Social Media Intern, October 2019 - May 2020',
            points: [
                'Developed social media strategy, including creating and sharing content across various social media accounts',
                'Used Adobe Creative Suite to compete graphic design projects for the team (phone/computer backgrounds, website changes, outgoing materials)',
                'Worked in community relations, partnering with local non-profits and schools on behalf of the Admirals for fundraisers and media content creation',
                'Assisted with all game day operations such as press row setup, camera work, and fan/VIP interaction'
            ]
        }
    ];

    return (
        <div className='resume'>
            <h1>Skills + Work Experience</h1>
            <h2>Skills:</h2>
            <p>
                Java, JavaScript, HTML, CSS, Node, Express, SQL/Sequelize, MongoDB, GraphQL, JWT, Jest, PWAs, React
            </p>
            {education.map(education => (
                <div key={education.id} className='resume-card'>
                    <div className='resume-item'>
                        <h2>{education.title}</h2>
                        <p>{education.description}</p>
                        <ul>
                            {education.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {workExperiences.map(work => (
                <div key={work.id} className='resume-card'>
                    <div className='resume-item'>
                        <h2>{work.title}</h2>
                        <p>{work.description}</p>
                        <ul>
                            {work.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Resume;
