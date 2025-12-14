import React, { use } from "react";
import { BsCart3, BsSearch, BsPerson } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Panier from "../panier/panier";
import { useContext, useState } from "react";
import { CartContext } from "../Cards/Context";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import SportCards from "../Cards/Presentation_produits";
import { GoHomeFill } from "react-icons/go";
import { MdSportsBasketball } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

export function Navbar({}) {
  const { cart, searchText, setSearchText } =
    useContext(CartContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <svg
            width="180"
            height="50"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#00D9FF", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#00A3CC", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#00D9FF", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="textCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#00D9FF", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 5 30 Q 15 25, 25 28 Q 32 30, 38 27"
              fill="none"
              stroke="url(#cyanGrad)"
              strokeWidth="2.5"
              opacity="0.8"
            />
            <polygon
              points="30,15 38,19 38,27 30,31 22,27 22,19"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="2"
            />
            <text
              x="24"
              y="27"
              fontFamily="Impact, Arial Black, sans-serif"
              fontSize="14"
              fontWeight="900"
              fill="#00D9FF"
              letterSpacing="-1"
            >
              SC
            </text>
            <rect x="23" y="28" width="14" height="1.5" fill="#00D9FF" />
            <text
              x="48"
              y="26"
              fontFamily="Arial Black, sans-serif"
              fontSize="16"
              fontWeight="900"
              fill="url(#textCyan)"
              letterSpacing="1"
            >
              SPORT
            </text>
            <text
              x="48"
              y="40"
              fontFamily="Arial Black, sans-serif"
              fontSize="16"
              fontWeight="900"
              fill="#00D9FF"
              letterSpacing="1"
            >
              CULTURE
            </text>
            <line
              x1="48"
              y1="30"
              x2="120"
              y2="30"
              stroke="#00D9FF"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <text
              x="130"
              y="32"
              fontFamily="Arial, sans-serif"
              fontSize="6"
              fill="#6699AA"
              letterSpacing="1"
            >
              EST. 2025
            </text>
          </svg>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <HashLink smooth className="nav-link nav-link-custom" to="/#">
                  <div className="nav-icon-wrapper">
                    <GoHomeFill size={24} />
                    <span className="ms-2 text-aficherText">Accueil</span>
                  </div>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link nav-link-custom"
                  to="/#Product"
                >
                  <MdSportsBasketball size={24} />
                  <span className="ms-2 text-aficherText">Sports</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link nav-link-custom" to="/#Jeux">
                  <MdComputer size={24} className="text text-center" />
                  <span className="ms-2 text  text-center text-aficherText">
                    Jeux
                  </span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link nav-link-custom"
                  to="/#Contact"
                >
                  <MdContactMail size={24} />
                  <span className="ms-2 text-aficherText">Contact</span>
                </HashLink>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <form
                className="d-flex search-form"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control search-input"
                  type="search"
                  value={searchText}
                  placeholder="Rechercher..."
                  aria-label="Search"
                  onChange={handleChange}
                />
                <button className="btn search-btn" type="submit">
                  <Link to="/search">
                    <BsSearch size={18} color="#00A3CC" />
                  </Link>
                </button>
              </form>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link icon-link position-relative"
                to="/panier"
              >
                <BsCart3 size={22} />
                <span className="cart-badge">{cart.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link icon-link position-relative d-flex align-items-center justify-content-center"
                to="/profile"
              >
                <IoPersonCircleOutline size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
