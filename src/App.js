import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Services from './components/Services';
import Nav from './components/Nav';


function App() {
  const [categories] = useState([
    {
      name: 'cover image',
      description: 'Image of myself'
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
            <Services currentCategory={currentCategory}></Services>
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
