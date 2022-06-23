import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
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

            <Header currentCategory={currentCategory}></Header>
            <Resume></Resume>
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