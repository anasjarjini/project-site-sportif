import React from "react";
import { FaSquareGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer style={{backgroundColor: '#0a2540'}} className="text-light pt-5 pb-3 mt-5" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="fw-bold mb-3" style={{color: '#f0f0f0'}}>À propos</h5>
            <p className="small" style={{color: '#c0c0c0', lineHeight: '1.6'}}>
              Ce site e-commerce sportif vous propose une large gamme
              d'articles : football, basket, fitness, musculation et plus.
            </p>
          </div>

          <div className="col-md-4 mb-5">
            <h5 className="fw-bold mb-3" style={{color: '#f0f0f0'}}>Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <HashLink smooth to="/#home" className="text-decoration-none small" 
                      style={{color: '#c0c0c0', transition: 'color 0.3s'}}
                      onMouseOver={(e) => e.target.style.color = '#fff'} 
                      onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                   Home
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#Product" className="text-decoration-none small" 
                          style={{color: '#c0c0c0', transition: 'color 0.3s'}}
                          onMouseOver={(e) => e.target.style.color = '#fff'} 
                          onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                  Product
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="#" className="text-decoration-none small" 
                      style={{color: '#c0c0c0', transition: 'color 0.3s'}}
                      onMouseOver={(e) => e.target.style.color = '#fff'} 
                      onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                   Nourriture
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#Contact" className="text-decoration-none small" 
                          style={{color: '#c0c0c0', transition: 'color 0.3s'}}
                          onMouseOver={(e) => e.target.style.color = '#fff'} 
                          onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

      

          <div className="col-md-4 mb-5">
            <h5 className="fw-bold mb-3" style={{color: '#f0f0f0'}}>Suivez-nous</h5>
            <div className="d-flex gap-3">
              <Link to="https://github.com/anasjarjini" 
                  
                    className="text-decoration-none" 
                    style={{color: '#c0c0c0', fontSize: '1.8rem', transition: 'color 0.3s'}}
                    onMouseOver={(e) => e.target.style.color = '#fff'} 
                    onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                <FaSquareGithub />
              </Link>

              <Link to="" 
                  
                    className="text-decoration-none" 
                    style={{color: '#c0c0c0', fontSize: '1.8rem', transition: 'color 0.3s'}}
                    onMouseOver={(e) => e.target.style.color = '#0077b5'} 
                    onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                <FaLinkedin />
              </Link>

              <Link to="www.Whatsapp.com" 
                  
                    className="text-decoration-none" 
                    style={{color: '#c0c0c0', fontSize: '1.8rem', transition: 'color 0.3s'}}
                    onMouseOver={(e) => e.target.style.color = '#25D366'} 
                    onMouseOut={(e) => e.target.style.color = '#c0c0c0'}>
                <FaWhatsapp />
              </Link>
            </div>
            <p className="small mt-3" style={{color: '#c0c0c0'}}>
              Rejoignez notre communauté sportive !
            </p>
          </div>
        </div>
        
        <hr style={{borderColor: '#1a3a52', margin: '2rem 0 1rem'}} />
        
        <div className="text-center small" style={{color: '#c0c0c0'}}>
          © 2025 Sport Culture – Tous droits réservés. | Développé par EL JARJINI ANAS && EL HAFIANI ZAKARYA
        </div>
      </div>
    </footer>
  );
}

export default Footer;