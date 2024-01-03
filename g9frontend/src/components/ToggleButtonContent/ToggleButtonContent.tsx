import React from "react";
import GraphComponent from "../LikesGraph/LikesGraph";
import "./ToggleButtonContent.css";
import {GraphDataPiece} from "../LikesGraph/LikesGraphMockData"

interface ToggleButtonContentProps {
    likes: number;
    engagementRate: number;
	topPosts: string[]; 
    yearData: GraphDataPiece[];
    dayData: GraphDataPiece[];
}

const ToggleButtonContent: React.FC<ToggleButtonContentProps> = (
    {
        likes,
        engagementRate,
        topPosts,
        dayData,
        yearData
    }
) => {
    return (
        <div>
            <div className="graphContainer">
                <div>
                    <div className="graphStyle">
                        <GraphComponent dayData={dayData} yearData={yearData}/>
                    </div>
                    <div className="graphTextLine">Number of likes: {likes}</div>
                </div>
                <div className="textContainer">
                    <p className="firstLineText">Your engagement</p>
                    <p className="firstLineText">rate</p>
                    <p className="thirdLineText">(ratio of interactions/followers)</p>
                    <p className="secondLineText">{engagementRate.toPrecision(4)}%</p>
                </div>
            </div>
            <div className="textTopic">
                <p style={{marginBlockStart: 0, marginBlockEnd: 0}}>Your most popular topic:</p>
                <p style={{marginBlockStart: 0}}>Top 3 posts:</p>
            </div>
            <div className="squareContainer">
				{
					// TODO: add link to original post
					topPosts.map(data => <div className="square"><img src={data} style={{width: '100%', height: '100%'}}></img></div>)
				}
            </div>
        </div>
    );
};

export default ToggleButtonContent;

