import React from 'react';
import '../Asserts/style/card.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import  projectimage from '../Asserts/image/images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple ,faGooglePlay} from '@fortawesome/free-brands-svg-icons';



function section() {
  return (
    <div className='flex-count'>  
      <h1>Developed more than <strong>100</strong> <br/> projects in <strong>15</strong> industries</h1>
    <div className="flex-container">
     
    <div className="box">
            <p><span className="icon-circle"><i className="fas fa-share-alt"></i></span> Social media</p>
            <p><span className="icon-circle"><i className="fas fa-dumbbell"></i></span> Fitness and sport</p>
            <p><span className="icon-circle"><i className="fas fa-university"></i></span> Bank</p>
            <p><span className="icon-circle"><i className="fas fa-building"></i></span> Construction</p>
            <p><span className="icon-circle"><i className="fas fa-gamepad"></i></span> Game Projects</p>
        </div>
        <div className="box">
            <p><span className="icon-circle"><i className="fas fa-graduation-cap"></i></span> Education</p>
            <p><span className="icon-circle"><i className="fas fa-truck"></i></span> Auto, transport</p>
            <p><span className="icon-circle"><i className="fas fa-plus-medical"></i></span> Medicine, health</p>
            <p><span className="icon-circle"><i className="fas fa-utensils"></i></span> Restaurants, food delivery</p>
            <p><span className="icon-circle"><i className="fas fa-store"></i></span> Marketplaces</p>
        </div>

        <div className="box">
            <p><span className="icon-circle"><i className="fas fa-vr-cardboard"></i></span> AR technology</p>
            <p><span className="icon-circle"><i className="fas fa-tv"></i></span> TV series</p>
            <p><span className="icon-circle"><i className="fas fa-rocket"></i></span> Startups</p>
            <p><span className="icon-circle"><i className="fas fa-pray"></i></span> Religion</p>
            <p><span className="icon-circle"><i className="fas fa-laptop-code"></i></span> Online courses</p>
        </div>
</div>
<div className='flex-part'>
  <h1>Project We are proud of </h1>
  <p>Our Software development company is truly proud of the wonderful clients we have <br/>
   worked with.We enjoy a long-term paternship</p>
   <div class="anchor-container">
    
        <a href="#link1">Project 1</a>
        <a href="#link2">Project 2</a>
        <a href="#link3">Project 3</a>
        <a href="#link4">Project 4</a>
    </div>
   
</div >
<div className='project-box'> 
  <div className='project-1'>
    <h1>Project 1</h1>
    <p>Crafted an innovative rental property management app,seamlessly integrating secure <br/>
    login,absence registration,and a tenant notice board.Elevating the resident <br/> 
    experience with user-friendly design and efficient communication channels </p>

    <span>Business analysis/ios/Android/QA/UI/UX Design </span>

    <div className="app-container">
      <div className="app-row" id='row'>
        <div className="app-column">400%</div>
        <div className="app-column"> +200 000 </div>
      </div>
      <div className="app-row">
        <div className="app-column">User Growth</div>
        <div className="app-column">Active Users</div>
      </div>
    </div>
    <div className="app-row" id='app'>
        <div className="app-column" id='app-col'>  <FontAwesomeIcon icon={faApple} /> App Store</div>
        <div className="app-column" id='app-colu'> <FontAwesomeIcon icon={faGooglePlay} />Google play</div>
      </div>
  </div>
  <div className='project-2'>
  <img src={projectimage} alt="Description of Image" class="image"/>
  </div>
</div>



</div>
    
  );
}

export default section;
