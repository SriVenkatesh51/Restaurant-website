import React from "react";

import "./Home.css";
import { OfferCards } from "./HomeComp/OfferCards";
import { Corosel } from "./HomeComp/Corosel";
import { Intro } from "./HomeComp/Intro";
import offers from "../Data/odders_data.json";
import corosel from "../Data/corosel_data.json";
import testimonials from "../Data/Testimonials.json";
import Testimonials from "./HomeComp/Testimonials";
import Impfood from "./HomeComp/Impfood";
function Home() {
  return (
    <>
      <div className="home">
        <hr className="hr1" />
        <OfferCards data={offers.offers} />
        <hr className="hr1" />
        <Intro />
        <div className="time">
          <span className="time_text">
            <i>----From 10AM to 10PM----</i>
          </span>
          <span>
            <hr />
            <h1>ORDER ONLINE</h1>
            <hr />
          </span>
        </div>
        <Corosel data={corosel.corosel} />
        <br />
        <div className="time">
          <span className="time_text">
            <i>----Check it out----</i>
          </span>
          <span>
            <hr />
            <h1>FROM OUR MENUE</h1>
            <hr />
          </span>
        </div>
        <Impfood imageUrl={"/food1.jpg"} />
        <div className="time">
          <span className="time_text">
            <i>--What Our Coustomers Say--</i>
          </span>
          <span>
            <hr />
            <h1>TESTIMONIALS</h1>
            <hr />
          </span>
        </div>
        <Testimonials testimonials={testimonials.testimonials} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
export default Home;
