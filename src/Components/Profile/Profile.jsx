import React, { useState, useEffect } from "react";
import { BsPersonCircle, BsCreditCard2Back } from "react-icons/bs";
import "./Profile.css";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData"));
    if (savedData) {
      setFirstName(savedData.firstName);
      setLastName(savedData.lastName);
      setEmail(savedData.email);
      setPhone(savedData.phone);
      setAddress(savedData.address);
      setCardNumber(savedData.cardNumber || "");
      setCardName(savedData.cardName || "");
      setExpiryDate(savedData.expiryDate || "");
      setIsSaved(true);
    }
    setLoading(false);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!lastName.trim()) newErrors.lastName = "Le nom est requis";

    if (!email.trim()) {
      newErrors.email = "L'email est requis";
    } 

    if (!phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } 

    if (!address.trim()) newErrors.address = "L'adresse est requise";

    if (password && password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (cardNumber) {
      const cleanCard = cardNumber.replace(/\s/g, "");
      if (cleanCard.length !== 16) {
        newErrors.cardNumber = "Le numéro de carte doit contenir 16 chiffres";
      }
    }

    if (cardNumber && !cardName.trim()) {
      newErrors.cardName = "Le nom sur la carte est requis";
    }

    if (cardNumber && expiryDate) {
      const [month, year] = expiryDate.split("/");
      if (!month || !year || parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.expiryDate = "La date d'expiration n'est pas valide";
      }
    }

    if (cardNumber && cvv && cvv.length !== 3) {
      newErrors.cvv = "Le CVV doit contenir 3 chiffres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        address,
        cardNumber,
        cardName,
        expiryDate,
      };
      localStorage.setItem("profileData", JSON.stringify(data));
      setIsSaved(true);
      setErrors({});
    }
  };

  const formatCardNumber = (value) => {
    const numbers = value.replace(/\s/g, "");
    const formatted = numbers.match(/.{1,4}/g)?.join(" ") || numbers;
    return formatted.substring(0, 19);
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    if (errors.cardNumber) setErrors({ ...errors, cardNumber: null });
  };

  const formatExpiryDate = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.substring(0, 2) + "/" + numbers.substring(2, 4);
    }
    return numbers;
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
    if (errors.expiryDate) setErrors({ ...errors, expiryDate: null });
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  if (loading) return null;

  if (isSaved) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <BsPersonCircle size={90} color="#00bcd4" />
            <h2 className="profile-title">
              {lastName} {firstName}
            </h2>
          </div>

          <div className="info-item">
            <strong>Nom complet :</strong>
            <span>
              {lastName} {firstName}
            </span>
          </div>
          <div className="info-item">
            <strong>Email :</strong>
            <span>{email}</span>
          </div>
          <div className="info-item">
            <strong>Téléphone :</strong>
            <span>{phone}</span>
          </div>
          <div className="info-item">
            <strong>Adresse :</strong>
            <span>{address}</span>
          </div>

          {cardNumber && (
            <div className="bank-card">
              <div className="card-header">
                <BsCreditCard2Back size={40} />
                <span>VISA</span>
              </div>
              <div className="card-number">{cardNumber}</div>
              <div className="card-footer">
                <div>
                  <div className="card-label">TITULAIRE</div>
                  <div className="card-value">{cardName}</div>
                </div>
                <div>
                  <div className="card-label">EXPIRE</div>
                  <div className="card-value">{expiryDate}</div>
                </div>
              </div>
            </div>
          )}

          <button className="btn-primary" onClick={() => setIsSaved(false)}>
            Modifier
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <BsPersonCircle size={90} color="#218f9dff" />
          <h2 className="profile-title">Profil</h2>
          <p className="profile-subtitle">
            Modifier vos informations personnelles
          </p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Prénom</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                clearError("firstName");
              }}
              placeholder="Votre prénom"
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                clearError("lastName");
              }}
              placeholder="Votre nom"
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              placeholder="Entrer votre email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearError("phone");
              }}
              placeholder="+212 6 XX XX XX XX"
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Adresse</label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                clearError("address");
              }}
              placeholder="Votre adresse complète"
              className={errors.address ? "input-error" : ""}
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError("password");
              }}
              placeholder="Nouveau mot de passe"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
        </div>

        <div className="bank-section">
          <div className="section-header">
            <BsCreditCard2Back size={28} color="#00bcd4" />
            <h3>Informations Bancaires</h3>
          </div>

          <div className="form-group">
            <label>Numéro de carte</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className={`card-input ${errors.cardNumber ? "input-error" : ""}`}
            />
            {errors.cardNumber && (
              <span className="error-message">{errors.cardNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label>Nom sur la carte</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value.toUpperCase());
                clearError("cardName");
              }}
              placeholder="NOM"
              className={`card-input uppercase ${errors.cardName ? "input-error" : ""}`}
            />
            {errors.cardName && (
              <span className="error-message">{errors.cardName}</span>
            )}
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Date d'expiration</label>
              <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryChange}
                placeholder="MM/AA"
                maxLength="5"
                className={`card-input ${errors.expiryDate ? "input-error" : ""}`}
              />
              {errors.expiryDate && (
                <span className="error-message">{errors.expiryDate}</span>
              )}
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.value.replace(/\D/g, "").substring(0, 3));
                  clearError("cvv");
                }}
                placeholder="123"
                maxLength="3"
                className={`card-input ${errors.cvv ? "input-error" : ""}`}
              />
              {errors.cvv && (
                <span className="error-message">{errors.cvv}</span>
              )}
            </div>
          </div>
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Sauvegarder
        </button>
      </div>
    </div>
  );
}
