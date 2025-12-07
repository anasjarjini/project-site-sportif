import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Introduction.css';

function IntroductionBanner() {
const slides = [
  {
    img: 'https://sportsexcellence.com/cdn/shop/articles/CCM_code_blue_6ad88ffa-7608-46ae-b288-740d20c51c7d.jpg?v=1750262216&width=1900',
    subtitle: '🔥 Nouvelle Collection 2025',
    title: 'Performance & Excellence',
    desc: 'Atteignez vos objectifs avec nos équipements premium',
    btnText: 'Découvrir',
    btnLink: '/#Product'
  },
  {
    img: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg',
    subtitle: '💥 Offres Exclusives',
    title: 'Réductions Jusqu\'à -50%',
    desc: 'Les meilleures marques au meilleur prix - Stock limité',
    btnText: 'Profiter Maintenant',
    btnLink: '/promotions'
  },
  {
    img: 'https://www.sporteed.fr/assets/img/produits-occasion-sport-sporteed.jpg',
    subtitle: '⚡ Équipement Complet',
    title: 'Tout pour Votre Entraînement',
    desc: 'Du débutant au professionnel - Trouvez votre équipement idéal',
    btnText: 'Explorer la Collection',
    btnLink: '/#Product'
  },
];
  
  return (
    <div className="banner-container" id="home">
      <Carousel indicators controls interval={4000} fade className="custom-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide-wrapper">
              <img className="slide-img" src={slide.img} alt={slide.title} />
              <div className="slide-overlay"></div>
              
              <Carousel.Caption className="slide-content">
                <h3 className="slide-subtitle">{slide.subtitle}</h3>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-desc">{slide.desc}</p>
                <Button className="slide-btn" size="lg" href={slide.btnLink}>
                  {slide.btnText} <span>→</span>
                </Button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default IntroductionBanner;