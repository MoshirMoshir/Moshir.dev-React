import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBar, Footer } from './components.jsx';
import './style.css';

function MainSection() {
  return (
    <section id="section-adjustment" className="container-fluid" style={{ backgroundColor: "#1c1c2c", padding: "50px 0" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-2"></div> {/* Spacer column */}
        <div className="col-md-4 text-center">
          <div>
            <h1 className="under-construction">Under Construction...</h1>
            <pre>
                                     No Carrots yet,
              Just React. Quick Reacts.
            </pre>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img className="scale-image" src="Carrot.png" alt="Carrot" />
        </div>
      </div>
    </section>
  );
}

function ArrowSection() {
  const [footerVisible, setFooterVisible] = useState(false);

  const handleClick = () => {
    setFooterVisible(!footerVisible);
  };

  return (
    <div>
    <section id="arrow-section" className="container-fluid" style={{ backgroundColor: "#1c1c2c", padding: "20px 0" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center">
        <a href={footerVisible ? "#footer-section" : "#navBar"} className="arrow-link" onClick={handleClick}>
              {footerVisible ? <i className="bi bi-arrow-up-circle"></i> : <i className="bi bi-arrow-down-circle"></i>}
        </a>
        </div>
      </div>
    </section>
    <Footer visible={footerVisible} />
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <MainSection />
      <ArrowSection />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);