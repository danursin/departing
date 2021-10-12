import "./TravelButton.scss";

import { Button, SemanticICONS } from "semantic-ui-react";

import React from "react";

interface TravelButtonProps {
    icon: SemanticICONS;
    label: string;
}

const TravelButton: React.FC<TravelButtonProps> = ({ icon, label }) => {
    return (
        <div className="dest-wrap">
            <Button icon={icon} circular size="massive" />
            <h2>{label}</h2>
        </div>
    );
};

export default TravelButton;
