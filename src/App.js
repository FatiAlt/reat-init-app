
    import React from 'react';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './components/Countries';

    const App = () => {
      return (


          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/countries' element={<Countries />}/>
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré a dessus */}
          <Route path="*" element={<Home />}/>


          </Routes>
          </BrowserRouter>


      );
    };

    export default App;





