import React, { useState } from 'react';
import Modal from '../Modal';


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
    {
      name: '3rd group project',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '4th group project',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
    
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
    {isModalOpen && (
      <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
    )}
    <div className="flex-row">
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/projects/${category}/${i}.jpg`).default}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
      ))}
    </div>
  </div>
);
};
export default Portfolio;
