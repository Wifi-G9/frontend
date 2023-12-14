import React from "react";
import GraphComponent from "../LikesGraph/LikesGraph";
import "./ToggleButtonContent.css";

interface ToggleButtonContentProps {}

const ToggleButtonContent: React.FC<ToggleButtonContentProps> = () => {

  return(
    <div>
    <div className="graphContainer">
        <div>
            <div className="graphStyle">
                <GraphComponent></GraphComponent>
            </div>
            <div className="graphTextLine">Number of likes</div>
        </div>
        <div className="textContainer">
            <p className="firstLineText">Your engagement</p>
            <p className="firstLineText">rate</p>
            <p className="thirdLineText">(ratio of interactions/followers)</p>
            <p className="secondLineText">70%</p>
        </div>
        
    </div>
    <div className="textTopic">
        <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Your most popular topic:</p>
        <p style={{marginBlockStart: 0}}>Top 3 posts:</p>
    </div>
    <div className="squareContainer">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
    </div>
  );
};

export default ToggleButtonContent;