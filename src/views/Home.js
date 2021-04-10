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
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

import Typography from "./IndexSections/Typography.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Home extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }
    render() {
        return (
            <>
                <main ref="main">
                    <section className="section section-components">
                        <Container>
                            <Typography />
                        </Container>
                    </section>
                    <CardsFooter />
                </main>
            </>
        );
    }
}

export default Home;
