import React, { useState } from 'react';
import storykeepers from '../../assets/projects/Screenshot-for-portfolio.png'

const Portfolio = ({category}) => {

return (
  <div className= 'flex-row'>
    <div className = "img-thumbnail mx-1">
     <img src={storykeepers}  style={{ width: "100%" }} alt="cover" />
  <h2> My Second Group Project </h2>
  </div>
  </div>


 )
}
export default Portfolio;
