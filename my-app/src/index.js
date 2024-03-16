import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBar, Footer } from './components.jsx';
import './style.css';

function MainSection() {
  return (
    <section className="container-fluid min-vh-100" style={{ backgroundColor: "#1c1c2c", padding: "50px 0" }}>
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
  const [arrowUp, setArrowUp] = useState(false);

  const handleClick = () => {
    if (arrowUp) {
      // If the arrow is currently up, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If the arrow is currently down, scroll to the footer
      document.getElementById('footer-section').scrollIntoView({ behavior: 'smooth' });
    }
    // Toggle the state of the arrow
    setArrowUp(!arrowUp);
  };

  return (
    <section id="arrow-section" className="container-fluid" style={{ backgroundColor: "#1c1c2c", padding: "20px 0" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <a href="#" className="arrow-link" onClick={handleClick}>
            {arrowUp ? <i className="bi bi-arrow-up-circle"></i> : <i className="bi bi-arrow-down-circle"></i>}
          </a>
        </div>
      </div>
    </section>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <MainSection />
      <ArrowSection />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);