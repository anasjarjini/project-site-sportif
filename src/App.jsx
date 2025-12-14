import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import SportCards from "./Components/Cards/Presentation_produits";
import Panier from "./Components/panier/panier";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import { CartProvider } from "./Components/Cards/Context";
import Slides from "./Components/Slide/Slide";
import Profile from "./Components/Profile/Profile";
import SportsProducts from "../src/Components/data/Soprtsproduct.json";
import JeuxListe from "../src/Components/data/JeuxListe.json";
import { SearchCard } from "./Components/Search/search";
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCard />} />
          <Route
            path="/"
            element={
              <>
                <Slides />
                <h1
                  className="text-39 text-center text-m-100 text-fw-normal "
                  style={{ color: "#4EC9F5", margin: "30px" }}
                >
                  {" "}
                  Liste Produit sportif
                </h1>

                <SportCards
                  SportsProducts={SportsProducts}
                  id_Section={"Product"}
                />
                <h1
                  className="text-39 text-center text-m-40 text-fw-normal "
                  style={{ color: "#4EC9F5", margin: "30px" }}
                >
                  Liste Jeux Product
                </h1>
                <SportCards SportsProducts={JeuxListe} id_Section={"Jeux"} />
              </>
            }
          />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer id="CONTACT" />
      </CartProvider>
    </Router>
  );
}

export default App;
