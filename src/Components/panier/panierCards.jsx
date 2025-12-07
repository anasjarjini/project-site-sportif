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
      className="card border-0 shadow-lg m-3 overflow-hidden" 
      style={{
        height: '350px', 
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
        e.currentTarget.style.boxShadoww = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div className="card-body p-0 h-100 d-flex flex-column">
        <img 
          src={image} 
          className="card-img-top" 
          style={{ height: '150px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          alt={name}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        <div className="p-3 d-flex flex-column flex-grow-1">
          <h1 className="card-title fw-bold mb-2" style={{ fontSize: '13px', lineHeight: '1.3', height: '34px', overflow: 'hidden', color: '#204e4aff' }}>{name}</h1>
          
          <div className="d-flex align-items-center mb-2">
            <h1 className="fw-bold text-dark mb-0 me-2" style={{fontSize: '25px'}}>{price}dh</h1>
          </div>

          {oldPrice && (
            <h3 className="text-muted text-decoration-line-through mb-3 small">{oldPrice}dh</h3>
          )}

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-danger btn-sm" onClick={handleRemove}>
              <i className="bi bi-trash"></i> Supprimer
            </button>
            <InputGroup size="sm" style={{ width: '60px' }}>
              <FormControl
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                style={{ textAlign: 'center' }}
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPanier;