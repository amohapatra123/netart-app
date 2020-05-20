import React from "react";
import "./App.css";
import { Media, Row, Col } from "reactstrap";
function App() {
  return (
    <>
      <div className="container">
        <Media object src={require("./Assets/logo.png")} alt="logo" id="logo" />
      </div>
      <div className="container-fluid">
        <Row>
          <Col md={{ size: 4 }}>
            <Media
              object
              src={require("./Assets/1.png")}
              alt="award"
              id="award"
            />
          </Col>
          <Col md={{ size: 8 }}>
            <Media>
              <Media heading id="main">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
                <ul>
                  <li>
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </li>
                  <li>
                    C.R.I. is the highest contributor in the country for the
                    projects of EESL (Energy Efficiency Services Limited) to
                    replace the old inefficient pumps with 5 Star rated energy
                    efficient smart pumps with IoT enabled control panel.
                  </li>
                </ul>
                <Media object src={require("./Assets/2.png")} id="main" />
                <Media bottom>
                  Government of India has awarded the
                  <b> "National Energy Conservation Award 2018".</b> Mr. G.
                  Selvaraj, Joint Managing Director of C.R.I. Group received the
                  award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                  Raj Kumar Singh, Honorable Minister of State.
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <Row className="mt-5">
          <Col>
            <h5>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </h5>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="mt-3">
          <Col>
            <Media object src={require("./Assets/3.png")} id="product" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ size: 11, offset: 1 }}>
            <h4>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </h4>
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <hr></hr>
      </div>
      <div className="container">
        <Row>
          <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 2 }}>
            <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          </Col>
        </Row>
      </div>
      <div className="container-fluid" id="service">
        <Row className="mt-4">
          <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 10, offset: 2 }}>
            CHEMICALS & PROCESS
            <span class="line" />
            POWER
            <span class="line" /> WATER & WASTE WATER
            <span class="line" /> OILS & GAS
            <span class="line" /> PHARMA
            <span class="line" /> SUGARS & DISTILLERIES
            <span class="line" />
            PAPER & PULP
            <span class="line" /> MARINE & DEFENCE
            <span class="line" /> METAL & MINING <span class="line" />
            FOOD & BEVERAGE
            <span class="line" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 8, offset: 4 }}>
            PETROCHEMICAL & REFINERIES
            <span class="line" /> SOLAR
            <span class="line" /> BUILDING
            <span class="line" /> HVAC
            <span class="line" /> FIRE FIGHTING
            <span class="line" />
            AGRICULTURE & RESIDENTIAL
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        {" "}
        <Row id="footer" className="mt-5 ml-1">
          <Col md={{ size: 3, offset: 1 }} className="mt-3 mb-3">
            <img src={require("./Assets/phone.png")} alt="icon" id="icon" />
            Toll Free 1800 200 1234
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            <img
              src={require("./Assets/facebook2.png")}
              alt="icon"
              id="icon2"
            />
            WWW.facebook.com/cripumps
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            <img src={require("./Assets/globe.png")} alt="icon" id="icon2" />
            WWW.facebook.com/cripumps
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
