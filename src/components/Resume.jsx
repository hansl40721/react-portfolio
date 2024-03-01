import React from 'react';
import '../style/Style.css';

const Resume = () => {
    const workExperiences = [
        {
            id: 1,
            title: 'Work Experience 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: [
                'Euismod in pellentesque massa placerat duis ultricies lacus sed.',
                'Bibendum arcu vitae elementum curabitur vitae nunc.',
                'Ac turpis egestas sed tempus urna et pharetra.',
                'Cum sociis natoque penatibus et magnis dis parturient.'
            ]
        },
        {
            id: 2,
            title: 'Work Experience 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: [
                'Euismod in pellentesque massa placerat duis ultricies lacus sed.',
                'Bibendum arcu vitae elementum curabitur vitae nunc.',
                'Ac turpis egestas sed tempus urna et pharetra.',
                'Cum sociis natoque penatibus et magnis dis parturient.'
            ]
        },
        {
            id: 3,
            title: 'Work Experience 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            points: [
                'Euismod in pellentesque massa placerat duis ultricies lacus sed.',
                'Bibendum arcu vitae elementum curabitur vitae nunc.',
                'Ac turpis egestas sed tempus urna et pharetra.',
                'Cum sociis natoque penatibus et magnis dis parturient.'
            ]
        },
    ];

    return (
        <div className='resume'>
            <h1>Skills + Work Experience</h1>
            <h2>Skills:</h2>
            <p>
                Java, JavaScript, HTML, CSS, Node, Express, SQL/Sequelize, MongoDB, React
            </p>
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
