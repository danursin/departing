import "semantic-ui-css/semantic.min.css";
import "./style/site.scss";

import AppRoutes from "./AppRoutes";
import { Grid } from "semantic-ui-react";
import History from "./services/History";
import React from "react";
import { Router } from "react-router";

const App: React.FC = () => {
    return (
        <Router history={History}>
            <Grid padded>
                <Grid.Row centered>
                    <Grid.Column tablet={16} largeScreen={8} widescreen={4}>
                        <AppRoutes />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
};

export default App;
