import React, {useState, useCallback, useRef, useEffect, ChangeEvent} from "react";
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import {
    Container,
    Button,
} from "@mui/material";
import "./CraftPost.css";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";


export const CraftPost: React.FC = () => {
    let navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const {username} = useParams();
    const [craftDescription, setCraftDescription] = useState<string>('');
    const [craftSong, setSong] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const routeChange = () => {
        // TODO: Add user profile path
        let path = `/profile`;
        navigate(path);
    }

    const handleClickLogo = () => {
        let path = `/`;
        navigate(path);
    }

    const handleAddImageClick = () =>{
        inputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64Data = reader.result as string;
                setImage(base64Data);
            };

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        setIsButtonVisible(image === null);
    }, [image]);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };


    const handleCraftButtonClick = async () => {
    //     if (image) {
    //         const isBase64 = /^data:image\/[a-zA-Z]*;base64,/.test(image);
    //         // alert(isBase64)
    //         if (isBase64) {
    //             try {
    //                 const response = await axios.post(`/${username}/describe-photo`, { photo: image }, {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                 });
    //                 craftDescription = response.data;
    //                 console.log(response.data.description);
    //
    //                 try {
    //                     const response = await axios.post(`/${username}/description-deezer`, { description: craftDescription }, {
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                     });
    //                     craftSongLink = response.data;
    //                     console.log(response.data.link);
    //
    //
    //                 } catch (error) {
    //                     console.error('Error sending description:', error);
    //                 }
    //             } catch (error) {
    //                 console.error('Error uploading image:', error);
    //             }
    //         } else {
    //             alert('The selected image is not in Base64 format.');
    //         }
    //     } else {
    //         alert('Please select an image before crafting.');
    //     }
        try {
            if (description === "") {
                setDescription("No description");
                return;
            }
            let apiUrl: string = `http://127.0.0.1:8000/describe?message=${description}&type=2`;
            // let craftDescription: string = "";

            axios.get(apiUrl)
                .then((response) => {
                    setCraftDescription(response.data["response"])



                }).catch((error) => {
                console.error('Axios error when fetching data from backend for description:', error);
            });
            try {
                // TODO: add user to link
                const response = await axios.get(`http://127.0.0.1:8000/user/user/description-deezer?description=${description}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setSong(response.data)
            } catch (error) {
                console.error('Error sending description:', error);
            }


        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    };



    return (
        <Container>
            <div className="container">
                <div className="header">
                    <p className="logo" onClick={handleClickLogo}>WiFi</p>
                    <Button
                        style={{
                            textTransform: 'none',
                            color: '#f7fefe',
                            right: '3%',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '20px'
                        }}
                        startIcon={<AccessibleForwardIcon />}
                        onClick={routeChange}
                    >
                        {username}
                    </Button>
                </div>
                <div className="Siuuu">
                    <div className="CR7">
                        <h1>Craft your post</h1>
                        <div className="container_craft">
                            <div className="inside_items">
                                <div style={{ position: 'relative', height: '120px' }}>
                                    {isButtonVisible && (
                                        <div style={{ display: "inline", verticalAlign: 'top' }}>
                                            <Button
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    textTransform: 'none',
                                                    color: '#666',
                                                    backgroundColor: 'transparent',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontSize: '20px',
                                                    padding: '15px 20px',
                                                    lineHeight: '1.2',
                                                }}
                                                startIcon={<AddIcon style={{ color: '#666', fontSize: 50, verticalAlign: 'middle' }} />}
                                                onClick={handleAddImageClick}
                                            >
                                                Add a photo
                                            </Button>
                                        </div>
                                    )}
                                    <div className="poza_nu_ma_mai_ma_pune_pe_front_end" style={{ display: isButtonVisible ? "none" : "block", verticalAlign: 'top' }} onClick={handleAddImageClick}>
                                        <img
                                            src={image || ''}
                                            alt=""
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    ref={inputRef}
                                    onChange={handleImageChange}
                                    style={{ display: "none" }}
                                    accept="image/jpeg, image/png, image/gif, image/bmp, image/webp, image/svg+xml, image/tiff"
                                />

                                <input
                                    id="description_info"
                                    name="description_info"
                                    type="text"
                                    placeholder="Description subject..."
                                    value={description}
                                    onChange={handleInputChange}
                                />

                                <Button
                                    style={{
                                        backgroundColor: '#2f668d',
                                        color: '#fff',
                                        textTransform: 'none',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        borderRadius: '10px',
                                        padding: '10px 20px',
                                        width: '150px',
                                        height: '50px',
                                        marginTop: '30px'
                                    }}
                                    onClick={handleCraftButtonClick}
                                >
                                    Craft
                                </Button>
                            </div>
                        </div>
                        <h3>Generated description</h3>
                        <input name={"output_1"} type="text" readOnly value={craftDescription} />
                        <h3>Generated song</h3>
                        <input name={"output_2"} type="text" readOnly value={craftSong} />
                    </div>
                </div>
                <SendUsAMessageButtonComponent />
            </div>
        </Container>
    );
}
