import React from 'react';
import './About.css';
import about_img from '../../law/Lawyer.jpg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} className="about-img" />
            </div>
            <div className="about-right">
                <h3>ABOUT OMA'S LEGAL</h3>
                <h2>Let Us Protect Your Treasured Future</h2>
                <p>
                    Oma's Legal has established itself as a trusted and
                    welcoming law firm in the heart of .... for over ... years.
                    Founded by ... , a dedicated and experienced attorney, the
                    firm offers compassionate and client-centerd legal support
                    across various areas, from corporate law to family matters
                    and criminal defence. Known for their commitment to
                    understanding each clients unique needs, Oma's Legal tailors
                    strategies to achieve the best possible outcomes.
                </p>
                <p>
                    {' '}
                    Beyond their legal services. Oma's legal is actively engaged
                    in the community, offering pro bono work and supporting
                    charitable cases aligned with their mission of justice and
                    compassion, when you work with Oma's Legal, your choosing a
                    partner commited to defendinf your rights and pursuing
                    justice with integrity.
                </p>
            </div>
        </div>
    );
};

export default About;
