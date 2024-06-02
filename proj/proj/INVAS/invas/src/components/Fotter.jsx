import React from "react";
import "./Fotter.css";

function Fotter() {
  return (
    <>
      <div>
        <div className="footer">
          <div className="atr">
            <div className="icn">
              <a href="#">
                <i>
                  <img src="/" alt="" />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src="/" alt="" />
                </i>
              </a>
            </div>
            <div className="atr_m">
              <a href="#">
                <span>AWARDS</span>
              </a>
              <a href="#">
                <span>CAREERS</span>
              </a>
              <a href="">
                <span>CONTACT</span>
              </a>
              <a href="">
                <span>ABOUT</span>
              </a>
              <a href="">
                <span>TERMS</span>
              </a>
              <a href="">
                <span>PRIVACY</span>
              </a>
            </div>
          </div>
          <div style={{ textAlign: "center", color: "#ffd700" }}>
            &copy; 2024 INVAS <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
