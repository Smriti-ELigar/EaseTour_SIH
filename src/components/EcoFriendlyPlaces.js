import React from "react";
import sikkim from "./sikkim.jpeg";
import hima from "./hima.jpeg";
import kerala from "./kerala.jpeg";


function EcoFriendlyPlaces() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Eco-Friendly Places</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <a href="place-x.html">
              <img src={sikkim} className="card-img-top" alt="Sikkim" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Sikkim</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a href="place-y.html">
              <img src={hima} className="card-img-top" alt="Himachal Pradesh" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Himachal Pradesh</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <a href="place-z.html">
              <img src={kerala} className="card-img-top" alt="Kerala" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Kerala</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcoFriendlyPlaces;
