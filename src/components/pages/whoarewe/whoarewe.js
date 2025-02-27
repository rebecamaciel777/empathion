import React from 'react' ;
import "./whoarewe.css";
import Navbar from '../../navbar'; 
import Team from "../../../Images/FB_IMG_1739035208066.jpg";
import Dina from "../../../Images/Dinna Pic (1).jpg";
import Zohaib from "../../../Images/zohaib.jpg";
import Helda from "../../../Images/Helda .jpg";


function whoarewe (){
    return (
        <>
        <Navbar />
            <div>
                <section class="about-section">
                    <div class="about-text">
                        <h2>About Us</h2>
                        <p>We are a global network of volunteers, united by a shared commitment to making a difference in the lives of those in need.</p>
                        <p>Our mission is to offer humanitarian aid and promote positive change through projects focused on social justice and sustainable development.</p>
                        <p>Join us and be part of the solution!</p>

                        <a href="#learn-more" class="btn">Learn More</a>
                    </div>
           
            <div class="about-image">
                <img src={Team} alt="Our Team"/>
            </div>
        </section>
    </div>
    <section class="what-we-do">
        <h2>What We Do</h2>
        <p>Empathion operates in five key areas, addressing immediate needs while promoting sustainable solutions.</p>
        
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-hand-holding-heart"></i>
                <h3>Emergency Relief</h3>
                <p>Rapid response to natural disasters and conflicts, providing food, water, shelter, and medical aid.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-user-md"></i>
                <h3>Healthcare & Mental Health</h3>
                <p>Access to primary healthcare, maternal health, and trauma counseling for displaced individuals.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-graduation-cap"></i>
                <h3>Education & Skill Development</h3>
                <p>Empowering youth and adults with vocational training, literacy programs, and scholarships.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-handshake"></i>
                <h3>Peacebuilding & Community</h3>
                <p>Facilitating dialogues, mediation, and social reintegration programs to foster stability.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-leaf"></i>
                <h3>Sustainability & Climate Action</h3>
                <p>Implementing renewable energy, climate-smart agriculture, and clean water initiatives.</p>
            </div>
        </div>
    
        <a href="#support" class="btn-support">Support Our Work</a>
    </section>

     <section class="our-impact">
        <div class="container">
            <h2>Our Impact</h2>
            <p>At Empathion, we measure success through real change in people’s lives.</p>
            
            <div class="impact-grid">
                <div class="impact-item">
                    <h3><span class="counter" >2.5 million</span>+</h3>
                    <p>Meals distributed in crisis-affected regions</p>
                </div>
                <div class="impact-item">
                    <h3><span class="counter" >500.000</span>+</h3>
                    <p>Individuals provided with healthcare services</p>
                </div>
                <div class="impact-item">
                    <h3><span class="counter" >250.000</span>+</h3>
                    <p>Children and adults educated</p>
                </div>
                <div class="impact-item">
                    <h3><span class="counter" >100.000</span>+</h3>
                    <p>Trauma survivors received mental health support</p>
                </div>
            </div>
            
            <blockquote>
                “Empathion gave me back my dignity and a chance to rebuild my life.”<br/>
                <span>- A Refugee in Jordan</span>
            </blockquote>
            
            <a href="./" class="btn-report">View Report</a>
        </div>
    </section>

    <section class="our-team">
        <h2>Our Team</h2>
        <p>Meet the leaders, experts, and volunteers driving Empathion’s mission forward.</p>
    
        <div class="team-category">
            <h3>Co-Founders</h3>
            <div class="team-grid">
                <div class="team-member">
                    <img src={Dina} alt="Dinna Reshef"/>
                    <h4>Mrs. Dinna Reshef</h4>
                    <p>Strategic Vision & Partnerships</p>
                </div>
                <div class="team-member">
                    <img src={Zohaib} alt="Dr. Zohaib Ahmad"/>
                    <h4>Dr. Zohaib Ahmad</h4>
                    <p>Public Health & Humanitarian Response</p>
                </div>
            </div>
        </div>
    
        <div class="team-category">
            <h3>Board of Directors</h3>
            <div class="team-grid">
                <div class="team-member">
                    <img src="./Images/idan.jpg" alt="Idan Militscher"/>
                    <h4>Idan Militscher</h4>
                    <p>Governance & Finance</p>
                </div>
                <div class="team-member">
                    <img src="images/dan.jpg" alt="Dan Shandor"/>
                    <h4>Dan Shandor</h4>
                    <p>Strategic Development</p>
                </div>
            </div>
        </div>
    
        <div class="team-category">
            <h3>Board of Governors</h3>
            <div class="team-grid">
                <div class="team-member">
                    <img src="images/donca.jpg" alt="Donca Viano"/>
                    <h4>Donca Viano</h4>
                    <p>Policy & International Relations</p>
                </div>
            </div>
        </div>
    
        <div class="team-category">
            <h3>Project Assistants</h3>
            <div class="team-grid">
                <div class="team-member">
                    <img src="images/sara.jpg" alt="Sara Peter"/>
                    <h4>Sara Peter</h4>
                    <p>Field Coordination & Operations</p>
                </div>
                <div class="team-member">
                    <img src="images/shanzeh.jpg" alt="Shanzeh Ashfaq"/>
                    <h4>Shanzeh Ashfaq</h4>
                    <p>Field Coordination & Operations</p>
                </div>
                <div class="team-member">
                    <img src="images/aarifa.jpg" alt="Aarifa Junejo"/>
                    <h4>Aarifa Junejo</h4>
                    <p>Field Coordination & Operations</p>
                </div>
                <div class="team-member">
                    <img src={Helda} alt="Helda Awwad"/>
                    <h4>Helda Awwad</h4>
                    <p>Field Coordination & Operations</p>
                </div>
                <div class="team-member">
                    <img src="../Images/phindile.jpg" alt="Phindile Dalmini"/>
                    <h4>Phindile Dalmini</h4>
                    <p>Field Coordination & Operations</p>
                </div>
            </div>
        </div>
    
        <a href="./" class="btn-volunteer">Become a Volunteer</a>
    </section>
        </>
    )}

    export default whoarewe;