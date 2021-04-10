/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        
        <h2 className="mt-lg mb-5">
          <span>Profile</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              최준
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/joon.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              이호창
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("assets/img/lhc.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              신정호
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/sjh.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              박진호
            </small>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/pjh.png")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
