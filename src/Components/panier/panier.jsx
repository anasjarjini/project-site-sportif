import React from "react";
import CardPanier from "./panierCards";
import { useContext } from "react";
import { CartContext } from "../Cards/Context";
import { color } from "three/tsl";



function Panier(){
     const { cart } = useContext(CartContext);
     const TextPanierVide=cart.length==0 ? <h4 className="text text-center text-panier text-h-100" style={{color:'#bcbcbcff', height: '180px'}}>aucun prduits dans le panier </h4> : '';
 

    return(
        <>
            <div className="container-fluid"><h1 className="text-39 text-center text-m-100 text-fw-normal " style={{color:'#4EC9F5', margin: '30px'}}>Liste de produits dans le panier</h1>

           
                {TextPanierVide}
            
         
            
            </div>
         
             <div className="container-fluid">
                    <div className="row justify-content-center">
                      {cart.map(produit => (
                        <div key={produit.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
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
    )
}

export default Panier;