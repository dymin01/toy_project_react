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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }
    state = {
        collapseClasses: "",
        collapseOpen: false,
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out",
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: "",
        });
    };

    render() {
        return (
            <>
                <div className="position-relative">
                    {/* Hero for FREE version */}
                    <section className="section section-hero section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-default">
                            <span className="span-150" />
                            <span className="span-50" />
                            <span className="span-50" />
                            <span className="span-75" />
                            <span className="span-100" />
                            <span className="span-75" />
                            <span className="span-50" />
                            <span className="span-100" />
                            <span className="span-50" />
                            <span className="span-100" />
                        </div>
                        <Container className="shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <Row className="align-items-center justify-content-center">
                                    <Col className="text-center" lg="6">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/logo.png")}
                                            style={{ width: "500px" }}
                                        />
                                        <p className="lead text-white">
                                            스터디 매칭 사이트입니다!
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                </div>

                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    style={{ objectfit: "contain" }}
                                    alt="..."
                                    src={require("assets/img/logo.png")}
                                />
                            </NavbarBrand>
                            <button
                                className="navbar-toggler"
                                id="navbar_global"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/brand/argon-react.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button
                                                className="navbar-toggler"
                                                id="navbar_global"
                                            >
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav
                                    className="navbar-nav-hover align-items-lg-center"
                                    navbar
                                >
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">
                                                Members
                                            </span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                                to="/profile-page"
                                                tag={Link}
                                            >
                                                Profile
                                            </DropdownItem>
                                            <DropdownItem
                                                to="/login-page"
                                                tag={Link}
                                            >
                                                Login
                                            </DropdownItem>
                                            <DropdownItem
                                                to="/register-page"
                                                tag={Link}
                                            >
                                                Register
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem to="/board-page" tag={Link}>
                                        <NavLink>게시판</NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav
                                    className="align-items-lg-center ml-lg-auto"
                                    navbar
                                >
                                    <NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            href=""
                                            target="_blank"
                                        >
                                            <span className="btn-inner—icon">
                                                <i className="fa fa-cloud-download mr-2" />
                                            </span>
                                            <span className="nav-link-inner—text ml-1">
                                                Download
                                            </span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;
