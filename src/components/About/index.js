import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';


function About() {
  return (
    <section className ="about-me" id="about">
   <h2 className ="section__title section__title--about">Who I am</h2>
   <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
   <p className ="section__subtitle section__subtitle--about">Designer and developer based out of Nashville, TN</p>
   
   <div className ="about-me__body">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
   </div>
   
</section>
  );
}

export default About;