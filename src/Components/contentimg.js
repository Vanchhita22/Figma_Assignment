import React from 'react';
import '../App.css'; 
import sign from"../Asserts/image/sign.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function contentimg() {
  return (
   <div>
 
     <div className="image-row">
      <img src={sign} alt="Image 1" />
      <img src={sign} alt="Image 2" />
      <img src={sign} alt="Image 3" />
      <img src={sign} alt="Image 4" />
      <img src={sign} alt="Image 5" />
     
    </div>
    <hr/>
    <div className="side-by-side-container">
      <section className="text-section">
        <h1>Full development cycle</h1>
        <h4>We use proven technologies</h4>
        <h2>Web</h2>
        <p>PHP/Javascript/NodeJS/Web Socket/Socket.io/Vue.js/<br/>
        Nuxt/MySOL/Laravel/GO lang/django/Python</p>

        <h2>Mobile</h2>
        <p>Swift/Kotlin/Alamofire/Firebase/CoreData//<br/>
        Corotune/RxJava/RxSwift/Unit Test/Navigation</p>

      </section>
      <section className="text-section">
       <h3>IOS development <FontAwesomeIcon icon={faArrowRight} /></h3>
       <h3 style={{fontWeight:800}}>Android development <FontAwesomeIcon icon={faArrowRight} /></h3>
       <h3>Web development <FontAwesomeIcon icon={faArrowRight} /> </h3>
       <h3>UI/UX design <FontAwesomeIcon icon={faArrowRight} /> </h3>
       <h3>Launch <FontAwesomeIcon icon={faArrowRight} /> </h3>
       <h3>IT consulting <FontAwesomeIcon icon={faArrowRight} /> </h3>
      </section>
    </div>
   </div>
    
  );
}

export default contentimg;
