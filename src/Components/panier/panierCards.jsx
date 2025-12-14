import React, { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "../Cards/Context";
import { InputGroup, FormControl } from 'react-bootstrap';

const CardPanier = ({ id, name, image, price, description, oldPrice }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart } = useContext(CartContext);
  
  const handleRemove = () => {
    removeFromCart(id);
    setIsRemoved(true);
  };
  
  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) setQuantity(val);
  };
  
  if (isRemoved) {
    return null;
  }
  
  return (
    <div 
      className="card border-0 shadow-sm m-3 overflow-hidden d-flex flex-row position-relative"
      style={{
        height: '100px',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }}
    >
     
      <img 
        src={image} 
        className="card-img-left"
        style={{
          width: '120px',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '12px 0 0 12px',
        }}
        alt={name}
      />
      
    
      <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
   
        <h1 
          className="fw-bold  m-2" 
          style={{ 
            fontSize: '12px', 
            lineHeight: '1',
            color: '#333'
          }}
        >
          {name}
        </h1>
        
        <div>
          <h1 
            className="fw-bold text-dark mb-0" 
            style={{ fontSize: '20px', color: '#2c3e50' }}
          >
            {price} Dh
          </h1>
          {oldPrice && (
            <h3 
              className="text-muted text-decoration-line-through small" 
              style={{ fontSize: '13px' }}
            >
              {oldPrice} Dh
            </h3>
          )}
        </div>
      </div>
      
   
      <div 
        className="position-absolute" 
        style={{
          top: '50px',
          right: '10px',
        }}
      >
        <InputGroup size="sm" style={{ width: '80px' }}>
          <FormControl
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            style={{ 
              textAlign: 'center',
              borderRadius: '6px',
              border: '1px solid #dee2e6'
            }}
          />
        </InputGroup>
      </div>
      
      
      <button 
        className="btn btn-outline-danger btn-sm position-absolute" 
        onClick={handleRemove}
        style={{
          top: '10px',
          right: '10px',
          borderRadius: '8px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#dc3545';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#dc3545';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <i className="bi bi-trash"></i> Supprimer
      </button>
    </div>
  );
};

export default CardPanier;