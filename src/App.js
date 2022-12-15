import React from 'react';
import Sidebar from './components/Sidebar';
import Router from './components/Router';
import DropdownPage from './pages/DropdownPage';
import ButtonsPage from './pages/ButtonsPage';
import AccordionPage from './pages/AccordionPage';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Router to='/'>
        <DropdownPage />
      </Router>
      <Router to='/buttons'>
        <ButtonsPage />
      </Router>
      <Router to='/accordion'>
        <AccordionPage />
      </Router>
    </div>
  );
}

export default App;
