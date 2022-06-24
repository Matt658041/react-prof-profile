import React, { useState } from 'react';
import Modal from '../Modal';
import firstProject from '../../assets/projects/Screenshot-for-first-prjt.png';
import secondProject from '../../assets/projects/Screenshot-for-portfolio.png';



const Portfolio = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: '1st group project',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '2nd group project',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
  
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex-row">
    <div className="img-thumbnail mx-1">
        <img src={firstProject} alt="First project" />
        <h3>First Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie</p>
        <h4> <a href="https://kimberlyannyo.github.io/sip-and-read/">1st Sip-and-Read group project</a></h4>
    </div>
    <div className="img-thumbnail mx-1">
        <img src={secondProject} alt="Second Project" />
        <h3>Second Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie.</p>
        <h4> <a href=" http://storykeepers.herokuapp.com/">2nd The Story Keepers group project </a></h4>
    </div>
   
    
</div>

    );
  };
  export default Portfolio;
  
  