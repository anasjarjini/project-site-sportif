
import "./App.css";
import {Navbar} from "./Components/Navbar/Navbar";
import SportCards from "./Components/Cards/card-type-sports";
import Panier from "./Components/panier/panier";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/footer";
import { CartProvider } from "./Components/Cards/Context";

import IntroductionBanner from "./Components/Introsection/INtroduction";
import Profile from "./Components/Profile/Profile";
import SportsProducts from '../src/Components/Cards/Soprtsproduct.json';
import JeuxListe from '../src/Components/Cards/JeuxListe.json'
import { SearchCard } from "./Components/Search/search";
function App() {
  return (
    <>
    
      <Router>
        <CartProvider>
         
          <Navbar></Navbar>
         
          {/* <SportsCategories/> */}
          <Routes>
            <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<SearchCard/>} />
            <Route
              path="/"
              element={
                <>
                 
                  <IntroductionBanner/>

                  <div className="container-fluid"><h1 className="text-39 text-center text-m-100 text-fw-normal " style={{color:'#4EC9F5', margin: '30px'}}>Liste Produit sportif </h1></div>
                  <SportCards SportsProducts={SportsProducts} id_Section={"Product"}/>


                   <div className="container-fluid"><h1 className="text-39 text-center text-m-100 text-fw-normal " style={{color:'#4EC9F5', margin: '30px'}}>Liste Jeux Product</h1></div>
                   <SportCards SportsProducts={JeuxListe} id_Section={"Jeux"}/>

                </>
              }
            />

            <Route
              path="/panier"
              element={
                <>
                  <Panier />
               
                </>
              }
            />
          </Routes>
             <Footer id="CONTACT" />
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
