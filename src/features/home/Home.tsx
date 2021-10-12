import { Grid } from "semantic-ui-react";
import React from "react";
import { TravelButton } from "../../components/TravelButton";

const Home: React.FC = () => {
    return (
        <Grid columns="3">
            <Grid.Column>
                <TravelButton icon="location arrow" label="Current Location" />
            </Grid.Column>
            <Grid.Column>
                <TravelButton icon="building" label="Work" />
            </Grid.Column>
            <Grid.Column>
                <TravelButton icon="home" label="Home" />
            </Grid.Column>
            <Grid.Column>
                <TravelButton icon="plus" label="New Destination" />
            </Grid.Column>
        </Grid>
    );
};

export default Home;
