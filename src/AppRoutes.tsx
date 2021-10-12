import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import SimplePlaceholder from "./components/SimplePlaceholder";

const Home = lazy(() => import("./features/home/Home"));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<SimplePlaceholder />}>
            <Switch>
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
};

export default AppRoutes;
