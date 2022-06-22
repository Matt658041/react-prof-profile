import React from 'react';
import coverImage from '../../assets/cover/bg-masthead.jpg'

function About() {
  return (
    <section className="page-section bg-primary" id="about">
         <img src={coverImage}  style={{ width: "100%" }} alt="cover" />
    <div className ="container px-4 px-lg-5">
        <div className ="row gx-4 gx-lg-5 justify-content-center">
            <div className ="col-lg-8 text-center">
                <h2 className ="text-white mt-0">Soon to Graduate from Vanderbilt Bootcamp!</h2>
                <hr className ="divider divider-light" />
                <p className ="text-white-75 mb-4">Full Stack Web Developer </p>
                
            </div>
        </div>
    </div>
</section>
  );
}

export default About;