import React, { useState } from 'react';
import ProduitSports from './produitcards';

// import SportsProducts from './Soprtsproduct.json';



function ProduitsParCategory({SportsProducts,id_Section}) {
  const [category, setCategory] = useState("All");

 
  const filteredProducts = category === "All" 
    ? SportsProducts 
    : SportsProducts.filter(p => p.category === category);

  
  const categories = ["All", ...new Set(SportsProducts.map(p => p.category))];

  return (
    <div className="container-fluid"> 
      <div className="row justify-content-center mb-5 px-3"  id={id_Section} >
        {categories.map(cat => (
          <button 
            key={cat}
            className={`col px-4 py-2 fw-semibold text-uppercase position-relative overflow-hidden  btn ${category === cat ? 'btn-primary shadow bg-Black' : 'btn-outline-primary'} m-1`} 
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row justify-content-center"> 
        {filteredProducts.map(produit => (
          <div key={produit.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-1">
            <ProduitSports  
              id={produit.id}
              name={produit.name} 
              image={produit.image} 
              price={produit.price} 
              category={produit.category}
              description={produit.description} 
              oldPrice={produit.oldPrice} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProduitsParCategory;