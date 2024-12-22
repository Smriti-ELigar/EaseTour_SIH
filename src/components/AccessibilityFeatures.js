import React from "react";
import beds from "./bed.jpeg";
import menus from "./menu.jpeg";
import sports from "./equip.jpg"

function AccessibilityFeatures() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Accessibility Features in Tourist Places</h2>
      <div className="row">
        {/* Repeat the card structure for each feature */}
        <div className="col-md-4">
          <div className="card">
            <img src={beds} className="card-img-top" alt="Wheelchair Accessibility"style={{ height: "250px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Adjustable beds and bed risers</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
          <img 
            src={menus} 
            className="card-img-top img-fluid" 
            alt="Braille Signs" 
            style={{ height: "250px", objectFit: "cover" }} // Set height and object-fit1
          />
          <div className="card-body">
            <h5 className="card-title">Menus in Braille Signs</h5>
          </div>
        </div>
      </div>

        <div className="col-md-4">
          <div className="card">
            <img src={sports}className="card-img-top" alt="Hearing Loops"style={{ height: "225px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">Adapted sports facilities or accessible equipment</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccessibilityFeatures;
