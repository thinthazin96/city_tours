import React from 'react';
import vid from "../../videos/scarecrow.mp4"
import "./Landing.css"
/*
I had asistance from the following videos for adding the video on to the backkground of the site
 https://www.youtube.com/watch?v=8MgpE2DTTKA&t=1094s
  - Jaspreet Singh
*/

const Landing = () =>  {
    return( <div>
    <section className="landing">  
        <div className="video-container"> 
            <video src = {vid} autoPlay= {true} muted loop></video>  
        </div>
        <div className="content">
            <h1>HAUNTED AMERICA</h1>
            <h3></h3>
            <a href="#tourlist" className="btn">Get Spooked</a>
        </div>
    </section>
  </div>)
  }
  export default Landing



  