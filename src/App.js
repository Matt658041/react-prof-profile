import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';


function App() {
  const [categories] = useState([
    {
      name: '',
      description: ''
    }

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav>
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {setCurrentCategory}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        
        </Nav>   
      <main>
      {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        
        
        
        </main>   
    </div>
  );
}

export default App;
