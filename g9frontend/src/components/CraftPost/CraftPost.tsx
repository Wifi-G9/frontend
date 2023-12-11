import React, {useState, useCallback, useRef, useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
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
    const [image, setImage] = useState<File | null>(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

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
        console.log(file);

        setImage(file || null);
    };

    useEffect(() => {
        setIsButtonVisible(image === null);
    }, [image]);

    const handleCraftButtonClick = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                // TODO: scrie endpointu in ''
                const response = await axios.post('', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

            //     TODO: asteapta raspuns si dupa populeaza alea ffs
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            alert('Please select an image before crafting.');
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
                        Username
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
                                            src={image ? URL.createObjectURL(image) : ''}
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
                        <h3>Description</h3>
                        {/*TODO: nu uita sa modifici*/}
                        <input name={"Messi"} type="text" readOnly value="lucas" />
                        <h3>Song</h3>
                        {/*TODO: nu uita sa modifici siuuuu*/}
                        <input name={"Messi1"} type="text" readOnly value="tigan" />
                    </div>
                </div>
                <SendUsAMessageButtonComponent />
            </div>
        </Container>
    );
}
