import { useContext,useState } from 'react';
import { CartContext } from '../Cards/Context';
import SportsProducts from '../Cards/Soprtsproduct.json';
import ProduitSports from '../Cards/produitcards';



export function SearchCard(){
  const [category, setCategory] = useState("All");
  const { searchText } = useContext(CartContext);
  const filteredProducts = SportsProducts.filter(p => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });
 const SearchNotExist = filteredProducts.length === 0 ? <h1 className='text text-center' style={{color:'#bcbcbcff', height: '180px', margin:'20px'}}>Aucun produit trouvé</h1> : null;
  return (
<>
      <div className='text text-m-100'>
        {SearchNotExist}
    </div>
    <div className="container-fluid">       
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
    </>
  );
}