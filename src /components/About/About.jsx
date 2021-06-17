import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Student | Learner | Developer | Leader | an ongoing effort to never stop learning new skills'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Developer</h3>
                    <p className='about-details'>
                    I have proficiency in coding languages like c++ , python and Java. Apart from that I have also developed my skills in front-end we development using HTML,CSS and javascipt.Rcently i have started working on Cisco Cyber security. 
                    {' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/suhani6'
                        >
                            check out my Github profile!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Learner</h3>
                    <p className='about-details'>
                    I aim at taking up the challenges and use my skills for growth of the organization. Passionate about exploring new avenues, learning new algorithms, and making life-long connections.
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Leadership</h3>
                    <p className='about-details'>
                       I have good work experience as i have done several internships in different fields.
                       Want to to know about it more?
                       {' '}
                        <a
                            className='about-link-element'
                            href='https://drive.google.com/file/d/1wLIQj8FnAvwRidjTKULFsBdheMWW0l1W/view?usp=sharing'
                        >
                            check out my Resume!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;