import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Photos of current projects"
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
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
      <Footer></Footer>
    </div>
  );
}

export default App;