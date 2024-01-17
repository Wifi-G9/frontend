import React, {useState} from "react";
import {Button, Container, ToggleButtonGroup, TextField, CircularProgress} from "@mui/material";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import SendUsAMessageButtonComponent from "../../components/SendUsAMessageButton/SendUsAMessageButton";
import {useParams} from "react-router-dom";
import "./UserPageStyle.css";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ToggleButtonContent from "../../components/ToggleButtonContent/ToggleButtonContent";
import {GraphDataPiece} from "../../components/LikesGraph/LikesGraphMockData";

interface TimeDataPiece {
	"date": string;
	"likes": number;
	"comments": number;
}

interface TopPost {
	post_image: string;
	post_url: string;
	post_type: string;
	post_text: string;
	post_hash_tags: string[];
	post_mentions: string[];
	post_grade: string;
}

interface UserPageData {
	user_is_private: boolean;
	user_profile_pic: string; 
	user_is_verified: boolean;
	user_followers: number;
	user_following: number;
	user_biography: string;
	posts_month: TimeDataPiece[];
	posts_year: TimeDataPiece[];
	top_3_posts: TopPost[];
}

export const UserPage: React.FC = () => {
	const [searchBarActivated, setSearchBarActivated] = useState<boolean>(true);
	const [canRender, setCanRender] = useState<boolean>(false);

	const [selectedPlatform, setSelectedPlatform] = useState<string>("Instagram");
	const [isConnectedToInstagram, setConnectedToInstagram] = useState<boolean>(false);
	const [searchUsername, setSearchUsername] = useState<string>("therock"); // FIXME: remove, just for development

	const {username} = useParams();

	const [likes, setLikes] = useState<number>(-1);
	const [engagementRate, setEngagementRate] = useState<number>(-1);
	const [topPosts, setTopPosts] = useState<string[]>(["post1", "post2", "post3"])
	const [dayData, setDayData] = useState<GraphDataPiece[]>([]);
	const [yearData, setYearData] = useState<GraphDataPiece[]>([]);

	const styles = {
		blueButton: {
			width: 300,
			height: 50,
			backgroundColor: "#2196f3", /* Blue background color */
			color: "#ffffff", /* White text color */
			padding: "10 20",
			border: "none",
			borderRadius: 8,
			fontSize: 16,
			cursor: "pointer"
		}
	}

	const handleSelect = (selectedButton: string): void => {
		setSelectedPlatform(selectedButton);
		console.log(username);
	}

	const handleConnection = (selectedPlatform: string, selected: boolean): void => {
		setSearchBarActivated(false);
		if (selectedPlatform === "Instagram") {
			setConnectedToInstagram(selected);

			fetch(`http://127.0.0.1:8000/user/${username}?insta=${searchUsername}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
			}).then(async (response) => {
				if (response.ok) {
					console.log("Good response");
					const responseJson: UserPageData = await response.json();
					const followers: number = responseJson.user_followers;
					const posts_month: TimeDataPiece[] = responseJson.posts_month;
					const posts_year: TimeDataPiece[] = responseJson.posts_year;
					const no_likes: number = posts_month.reduce((sum: number, data) => sum + data['likes'] + data['comments'] * 100, 0);
					const engagement: number = (no_likes / followers) * 100;
					const top_posts = responseJson.top_3_posts.map((data) => data.post_image);

					let month_data: GraphDataPiece[] = [];
					for (let i = 0; i < Math.min(posts_month.length, 12); ++i) {
						month_data.push({"data": posts_month[i].likes, "time": posts_month[i].date});
					}

					let year_data: GraphDataPiece[] = [];
					for (let i = 0; i < Math.min(posts_year.length, 8); ++i) {
						year_data.push({"data": posts_year[i].likes, "time": posts_year[i].date});
					}

					setTopPosts(top_posts);
					setYearData(year_data);
					setDayData(month_data);
					setLikes(no_likes);
					setEngagementRate(engagement);
					setCanRender(true);

					console.log(responseJson);
				} else {
					console.error("Response error");
					console.error(await response.json());
				}
			});
			console.log("Set " + selectedPlatform + " to " + selected);
		}
	}

	return (
		<Container>
			<div className="container">
				<div className="header">
					<p className="logo">WiFi</p>
					<Button style={{
						textTransform: 'none',
							color: '#f7fefe',
							right: '3%',
							fontFamily: 'Inter, sans-serif',
							fontSize: '20px'
					}} to="/" component={Link} color="inherit" sx={{mr: 5}}>
					<HomeIcon sx={{mr: 1}}/>
					Home Page
				</Button>
			</div>
			<div className="content">
				<div className="leftContainer">
					<div className="centeredContainer">
						<div className="welcomeText">
							Welcome {username}!
						</div>
						<div>
							<Button component={Link} to={`/${username}/craft-post`} className="blueButton" style={styles.blueButton}>
								Craft your post
							</Button>
						</div>
					</div>
				</div>
				<div className="rightContainer">
					<div className="toggleGroupContainer">
						<ToggleButtonGroup
							style={{backgroundColor: '#e9e9e9', fontFamily: 'Inter, sans-serif', width: '100%'}}
							color="primary"
							exclusive
							aria-label="Platform"
						>
							<ToggleButton className="toggleButton" value='Instagram'
								isSelected={selectedPlatform === "Instagram"}
								onSelect={() => handleSelect("Instagram")}>Instagram</ToggleButton>
							<ToggleButton className="toggleButton" value='Facebook'
								isSelected={selectedPlatform === "Facebook"}
								onSelect={() => handleSelect("Facebook")}>Facebook</ToggleButton>
							<ToggleButton className="toggleButton" value='X' isSelected={selectedPlatform === "X"}
								onSelect={() => handleSelect("X")}>X</ToggleButton>
						</ToggleButtonGroup>
						<div className="groupContainerContent">
							<Container sx={{mt: 3}}>
								{
									(selectedPlatform === "Instagram" && isConnectedToInstagram && !canRender) &&
									<CircularProgress style={{color: "purple"}}/>
								}
								{
									(selectedPlatform === "Instagram" && isConnectedToInstagram && canRender) &&
									<ToggleButtonContent
										likes={likes}
										engagementRate={engagementRate}
										topPosts={topPosts}
										dayData={dayData}
										yearData={yearData}
									/>
								}
								{ 
									(searchBarActivated) &&
									<Container className="centeredContainer" style={{display: "flex", flexDirection: "column"}}>
										<div className="largeText" style={{marginBottom: 20}}>
											Please enter an Instagram username to analyze. 
										</div>
										<TextField
											placeholder="Please enter an instagram username."
											variant="outlined"
											value={searchUsername}
											onChange={(e) => setSearchUsername(e.target.value)}
											style={{ marginBottom: 10, width: 500 }}
										/>
										<Button className="blueButton" style={styles.blueButton} onClick={() => handleConnection(selectedPlatform, true)}>
											Search
										</Button>
									</Container>
								}
								</Container>
							</div>
						</div>
					</div>
				</div>
				<SendUsAMessageButtonComponent/>
			</div>
		</Container>
	);
}
