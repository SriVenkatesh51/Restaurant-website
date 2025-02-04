import React from "react";
import "./Impfood.css";

const Impfood = ({ imageUrl }) => {
  return (
    <div className="impfood-container">
      <img src={imageUrl} alt="Food" className="food-image" />
      <div className="food-description">
        <h2>Indulge in Our Chef's Special Biryani</h2>
        <p>
          Experience the taste of tradition with our signature Chef's Special
          Biryani. Every grain of rice infused with the exotic blend of spices
          transports you to the bustling streets of Hyderabad.
        </p>
        <p>
          Savor the succulent pieces of marinated meat, slow-cooked to
          perfection, creating an explosion of flavors with every bite. Topped
          with caramelized onions, roasted nuts, and fragrant herbs, our biryani
          is a feast for the senses.
        </p>
        <p>
          Whether you're a seasoned biryani enthusiast or a first-time
          adventurer, our Chef's Special Biryani promises an unforgettable
          culinary journey that will leave you craving for more.
        </p>
        <button className="get-some-button">Where can I get some?</button>
      </div>
    </div>
  );
};

export default Impfood;
