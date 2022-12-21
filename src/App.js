import React from "react";
import Sidebar from "./components/Sidebar";
import Router from "./components/Router";
import DropdownPage from "./pages/DropdownPage";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionPage from "./pages/AccordionPage";
import PageTitle from "./pages/PageTitle";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="ml-72">
        <PageTitle />
        <main className="p-4">
          <Router to="/">
            <DropdownPage />
          </Router>
          <Router to="/buttons">
            <ButtonsPage />
          </Router>
          <Router to="/accordion">
            <AccordionPage />
          </Router>
          <Router to="/modal">
            <ModalPage />
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
