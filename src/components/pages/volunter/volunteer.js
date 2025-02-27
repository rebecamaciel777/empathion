import React from 'react' ;
import "./volunteer.css";
import Navbar from '../../navbar'; 

function volunteer (){
    return (
        <>
        <Navbar />
<section class="volunteer-section">
<h2>Volunteer & Get Involved</h2> 
<p>Empower lives by giving your time and skills.</p>

<div class="volunteer-options">
    <div class="volunteer-card">
        <h3>On-Ground Volunteering</h3>
        <p>Assist in relief missions, training, and fieldwork.</p>
    </div>
    <div class="volunteer-card">
        <h3>Remote Volunteering</h3>
        <p>Help with fundraising, digital campaigns, and advocacy.</p>
    </div>
    <div class="volunteer-card">
        <h3>Fundraising & Donations</h3>
        <p>Organize charity drives or support financially.</p>
    </div>
</div>

<p class="cta-text">Every action counts. Sign up today!</p>
<a href="./" class="btn-volunteer">Join Us</a>
</section>
</>
)}

export default volunteer
