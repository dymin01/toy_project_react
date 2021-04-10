import React from "react";
import { Route, Switch } from "react-router-dom";
import BoardPage from "./views/BoardPage";
import ArticlePage from "./views/ArticlePage";
import RegisterPage from "./views/RegisterPage";

function Table() {
    return (
        <div>
            <Switch>
                <Route exact path="/board-page" component={BoardPage} />
                <Route
                    exact
                    path="/article/:articleId"
                    component={ArticlePage}
                />
                <Route exact path="/register" component={RegisterPage} />
                {/* 이거 안넣어 줘서 수정 페이지 안넘어갔음!!! */}
                <Route exact path="/edit/:articleId" component={RegisterPage} />
            </Switch>
        </div>
    );
}

export default Table;
