import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;