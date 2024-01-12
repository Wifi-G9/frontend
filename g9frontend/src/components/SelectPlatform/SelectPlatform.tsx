import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import InstagramComponent from "../GetInsta/GetInsta";

const SelectPlatform = (data: {theWord: string}) => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

    return (
        <div className="toggleGroupContainer">
            <ToggleButtonGroup
                style={{backgroundColor: '#e9e9e9', fontFamily: 'Inter, sans-serif', width: '100%'}}
                color="primary"
                exclusive
                aria-label="Platform"
            >
                <ToggleButton className="toggleButton" value='instagram'
                              onClick={() => setSelectedPlatform("instagram")}>Instagram</ToggleButton>
                <ToggleButton className="toggleButton" value='facebook'
                              onClick={() => setSelectedPlatform("facebook")}>Facebook</ToggleButton>
                <ToggleButton className="toggleButton" value='X'
                              onClick={() => setSelectedPlatform("x")}>X</ToggleButton>
            </ToggleButtonGroup>
            <div className="postContentContainer">
                {(selectedPlatform === "instagram") && <InstagramComponent query={data.theWord}/>}
            </div>
        </div>
    );
};

export default SelectPlatform;
