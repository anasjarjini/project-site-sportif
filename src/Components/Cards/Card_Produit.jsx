import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { useState,useEffect } from "react";
import {CartContext} from './Context';
import { useContext } from "react";
function ProduitSports({id, name, price, oldPrice, image, description, category}) {

   const { addToCart,cart,removeFromCart } = useContext(CartContext); 

  
  const isIncart=cart.some(Item=>Item.id===id);

  const ButtonText=isIncart ? "Annuler":"🛒 Ajouter au panier";
  const ButtonColor=isIncart ? '#0a6474ff':'#0f3e47ff';

const [userRating, setUserRating] = useState(0);
  const renderStars = () => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        onClick={() => setUserRating(i)}   
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        style={{
          color: i <= userRating ? "#f5c518" : "#c1c1c1",
          fontSize: "25px",
          marginRight: "2px",
          cursor: "pointer",
          transition: "0.2s"
        }}
      >
        ★
      </span>
    );
  }
  return stars;
};

  const prudact={
    id,
    name,
    image,
    price,
    oldPrice,
    image,
    description,
    category,
    
};
  return (
    <div 
      className="card border-0 shadow-lg m-3 overflow-hidden" 
      style={{
        height: '350x', 
        width: '300px',
        backgroundColor: '#c5cacdff',
        borderRadius: '24px',
        transition: 'all 0.7s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 217, 255, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div className="card-body p-0 h-100 d-flex flex-column">
        
        <img 
          src={image} 
          className="card-img-top" 
          style={{
            height: '170px', 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          alt={name}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        
        <div className="p-3 d-flex flex-column flex-grow-1">
          
          <h1 className="card-title fw-bold  mb-2" 
            style={{
              fontSize: '13px', 
              lineHeight: '1.3', 
              height: '34px', 
              overflow: 'hidden',
              color: '#204e4aff'
            }}>
            {name}
          </h1>
          
          <h5 className="card-text text-muted mb-3" 
            style={{
              fontSize: '10px', 
              lineHeight: '1.4', 
              height: '29px', 
              overflow: 'hidden'
            }}>
            {description}
          </h5>
          
          <div className="mb-2 d-flex align-items-center">
  {renderStars()}
</div>

          
          <div className="mt-auto">
            <h1 className="fw-bold text-dark mb-1" style={{fontSize: '25px'}}>
              {price}dh
            </h1>
            
            {oldPrice && (
              <h3 className="text-muted text-decoration-line-through mb-3  small">
                {oldPrice}dh
              </h3>
            )}
            
            <button 
              className="btn w-100 text-white fw-semibold"
              style={{
                background: ButtonColor,
                border: 'none',
                borderRadius: '12px',
                padding: '10px',
                fontSize: '10px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                
                e.currentTarget.style.transform = 'scale(1)';
            
              }}
              onMouseLeave={(e) => {
               
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = 'none';
              }}  
              onClick={(e)=>{
                
                
                if(ButtonText=="Annuler"){
                  removeFromCart(id); 
                }else {
                  addToCart(prudact); 
                }
                }
              } 
            >
           {ButtonText}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProduitSports;