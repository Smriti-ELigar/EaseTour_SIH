import React from "react";
import wildImage from "./wild.jpeg";
import honeymoon from "./honey3.jpeg";
import beaches from "./Beach.jpg";


function ExploreByInterests() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Explore by Interests</h2>
      <div className="row">
        {/* Repeat the card structure for each interest */}
        <div className="col-md-4">
          <div className="card">
            <a href="wildlife.html">
              <img src={wildImage} className="card-img-top" alt="Wildlife" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Wildlife</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a href="honeymoon.html">
              <img src={honeymoon} className="card-img-top" alt="Honeymoon" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Honeymoon</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a href="beach.html">
              <img src={beaches}className="card-img-top" alt="Beach" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Beach</h5>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
}

export default ExploreByInterests;
