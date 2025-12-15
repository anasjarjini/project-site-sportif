import React, { useState } from "react";
import CardPanier from "./panierCards";
import { useContext } from "react";
import { CartContext } from "../Cards/Context";
import { color } from "three/tsl";
import { use } from "react";

function Panier() {
  const { cart } = useContext(CartContext);
 
const Total = cart.reduce(
  (sum, produit) => sum + produit.price * (produit.quantity || 1), 0);
  const TextPanierVide =
    cart.length == 0 ? (
      <h4
        className="text text-center text-panier text-h-100"
        style={{ color: "#bcbcbcff", height: "180px" }}
      >
        aucun prduits dans le panier{" "}
      </h4>
    ) : (
        <h4
        className="text text-center text-panier text-h-100"
        style={{ color: "#4dff00ff"}}
      >
      Total : {Total.toFixed(2)} Dh
      </h4>
    );

  return (
    <>
      <div className="container-fluid">
        <h1
          className="text-39 text-center text-m-100 text-fw-normal "
          style={{ color: "#4EC9F5", margin: "30px" }}
        >
          Liste des produits dans le panier
        </h1>
        {TextPanierVide}
      </div>

    <div className="container-fluid">
  <div className="row justify-content-center">
    {cart.map((produit) => (
      <div
        key={produit.id}
        className="col-6 d-flex justify-content-center mb-2"
      >
        
        <CardPanier
          id={produit.id}
          name={produit.name}
          image={produit.image}
          price={produit.price}
          description={produit.description}
          oldPrice={produit.oldPrice}
        />
      </div>
    ))}
  </div>
</div>

      
    </>
  );
}

export default Panier;
