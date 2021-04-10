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
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// index page sections
import Home from "./Home.js";
import Board from "../board/Table";
import { Provider } from "react-redux";
import store from "./store";

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Provider store={store}>
                        <DemoNavbar />
                        <Route path="/" exact={true} component={Home} />
                        <Route
                            path="/board-page"
                            exact={true}
                            component={Board}
                        />
                    </Provider>
                </BrowserRouter>
            </>
        );
    }
}

export default Index;
