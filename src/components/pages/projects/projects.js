import React from 'react' ;
import "./projects.css";
import Navbar from '../../navbar'; 

function projects (){
    return (
        <>
        <Navbar />

        <section class="upcoming-projects">
        <h2>Upcoming Projects</h2>
        <p>Stay updated on Empathion’s latest initiatives across the globe:</p>
    
        <div class="project-list">
            <div class="project">
                <h3>Gaza Relief Program</h3>
                <p>Urgent humanitarian aid for displaced families.</p>
                <a href="./" class="learn-more">Full project timeline & details: Learn More</a>
            </div>
    
            <div class="project">
                <h3>Healthcare Expansion in Syria</h3>
                <p>Establishing mobile medical clinics.</p>
                <a href="./" class="learn-more">Full project timeline & details: Learn More</a>
            </div>
    
            <div class="project">
                <h3>Women’s Empowerment in Pakistan</h3>
                <p>Skill development programs for economic independence.</p>
                <a href="./" class="learn-more">Full project timeline & details: Learn More</a>
            </div>
        </div>
    </section>
        </>

)}

export default projects
