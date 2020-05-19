import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "../Styles/main.css";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="row">
            <div className="col-12 col-md-4 offset-md-2">
              <Media
                object
                src={require("../Assets/logo.png")}
                alt="logo"
                id="logo"
              />
            </div>
          </div>
        </Container>
        <div className="container-fluid">
          <div className="row">
            <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 4 }}>
              <Media
                object
                src={require("../Assets/1.png")}
                alt="award"
                id="award"
              />
            </Col>
            <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 8 }}>
              <Media>
                <Media body>
                  <Media heading xs={{ size: 12, span: 4 }}>
                    C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD
                    2018 for the 4th time.
                    <ul className="mt-4">
                      <li>
                        <h5>
                          C.R.I.'s energy efficient products are well recognized
                          by various Government Institutions, as trustworthy
                          products for various projects across the globe to save
                          energy.
                        </h5>
                      </li>
                      <li>
                        <h5>
                          {" "}
                          C.R.I. is the highest contributor in the country for
                          the projects of EESL (Energy Efficiency Services
                          Limited) to replace the old inefficient pumps with 5
                          Star rated energy efficient smart pumps with IoT
                          enabled control panel.
                        </h5>
                      </li>
                    </ul>
                  </Media>
                  <Media object src={require("../Assets/2.png")} id="main" />
                  <Row>
                    Government of India has awarded the
                    <b>"National Energy Conservation Award 2018".</b>
                    Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                    received the award from Smt. Sumitra Mahajan, Speaker of Lok
                    Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                  </Row>
                </Media>
              </Media>
            </Col>
          </div>
        </div>
        <Row className="ml-5 mt-5" id="lakh">
          <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 12 }}>
            <h5>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </h5>
          </Col>
        </Row>
        <Container>
          <Row className="mt-4">
            <Col xs={{ size: 12 }} sm={{ size: 12 }} md={{ size: 12 }}>
              <Media object src={require("../Assets/3.png")} id="product" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              xs={{ size: 10, offset: 1 }}
              sm={{ size: 10, offset: 0 }}
              md={{ size: 11, offset: 1 }}
            >
              <h4>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires &
                Cables - Solar Systems - Motors
              </h4>
            </Col>
          </Row>
        </Container>
        <div id="hr">
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
        </div>

        <Row>
          <Col
            xs={{ size: 10, offset: 1 }}
            sm={{ size: 12 }}
            md={{ size: 8, offset: 4 }}
          >
            <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            xs={{ size: 11, offset: 1 }}
            sm={{ size: 1 }}
            md={{ size: 9, offset: 2 }}
          >
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
        <Row>
          <Col xs={{ size: 11, offset: 1 }} md={{ size: 8, offset: 4 }}>
            PETROCHEMICAL & REFINERIES
            <span class="line" /> SOLAR
            <span class="line" /> BUILDING
            <span class="line" /> HVAC
            <span class="line" /> FIRE FIGHTING
            <span class="line" />
            AGRICULTURE & RESIDENTIAL
          </Col>
        </Row>

        <Row id="footer" className="mt-5 ml-1">
          <Col md={{ size: 3, offset: 1 }} className="mt-3 mb-3">
            <img src={require("../Assets/phone.png")} alt="icon" id="icon" />
            Toll Free 1800 200 1234
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            <img
              src={require("../Assets/facebook2.png")}
              alt="icon"
              id="icon2"
            />
            WWW.facebook.com/cripumps
          </Col>
          <Col md={{ size: 3, offset: 1 }}>
            <img src={require("../Assets/globe.png")} alt="icon" id="icon2" />
            WWW.facebook.com/cripumps
          </Col>
        </Row>
      </>
    );
  }
}
