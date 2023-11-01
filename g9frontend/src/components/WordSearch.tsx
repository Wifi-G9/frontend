import React from "react";

// const WordSearch: React.FC = () =>{
//     const [text, setText] = React.useState('');
//     return (
//         // <div>
//         //     <div className = "title">
//         //         <h1>Numele aplicatiei?</h1>
//         //     </div>
//         //     <div className="input_wrapper">
//         //         <div>Search a word:</div>
//         //         <input
//         //             type="text"
//         //             placeholder="Search Word"
//         //             value={text}
//         //             onChange={(e) => setText(e.target.value)}
//         //     />
//         //     <button className="button">Search</button>
//         //     </div>
//         // </div>
//         <div className="root-container">
//             <header className="header">
//                 <button>Button 1</button>
//
//                 <div className="right-container">
//                     <button>Button 2</button>
//                     <button>Button 3</button>
//                 </div>
//             </header>
//             <div className="content">
//                 <div className="left-container"></div>
//                 <div className="right-container">
//                     <div className="semicircle"></div>
//                     <div className="square"></div>
//                     <div className="square"></div>
//                     <div className="square"></div>
//                 </div>
//             </div>
//             <footer className="footer">Centered text</footer>
//         </div>
//     )
// }

// export default WordSearch
//



const WordSearch: () => void = () => {
        const containerStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'white',
            padding: '16px 32px',
        };

        const headerStyle: React.CSSProperties = {
            padding: '20px',
            backgroundColor: 'blue',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            color:"white",



        };

        const rightContainerStyle: React.CSSProperties = {
            display: 'flex',
            gap: '8px',
        };

        const contentStyle: React.CSSProperties = {
            display: 'flex',
            flexGrow: 1,
            position: 'relative',
            height: '100%',
        };

        const leftContainerStyle: React.CSSProperties = {
            backgroundColor: 'orange',
            marginRight: '8px',
            width: '30%',
            whiteSpace: 'pre-line'
        };

        const rightContentStyle: React.CSSProperties = {
            backgroundColor: 'pink',
            display: 'flex',
            flexGrow: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-around',
        };

        const semicircleStyle: React.CSSProperties = {
            width: '400px',
            height: '130px',
            backgroundColor: 'orange',
            position: 'absolute',
            top: '0',
            borderRadius: '0 0 250px 250px',

            display: 'flex',
            justifyContent: 'center',  // Center horizontally
            alignItems: 'center',      // Center vertically
            textAlign: 'center',       // Center text horizontally within the container
            lineHeight: '130px',


        };

        const squareInstagram: React.CSSProperties = {
            width: '300px',
            height: '600px',
            marginTop: '150px',
            backgroundColor: 'violet',
            marginBottom: '8px',
            color:'white',
            whiteSpace: 'pre-line'
        };

        const squareFacebook: React.CSSProperties = {
            width: '300px',
            height: '600px',
            marginTop: '150px',
            backgroundColor: 'blue',
            marginBottom: '8px',
            color:'white',
        };

        const squareX: React.CSSProperties = {
            width: '300px',
            height: '600px',
            marginTop: '150px',
            backgroundColor: 'black',
            marginBottom: '8px',
            color:'white',
        };

        const footerStyle: React.CSSProperties = {
            backgroundColor: 'green',
            marginTop: '8px',
            padding: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            color:'white',
        };
        const [text, setText] = React.useState('');
    return (
        <div style={containerStyle} className="root-container">
            <header style={headerStyle} className="header">
                NUMELE APLICATIEI
                <div style={rightContainerStyle} className="right-container">
                    <button>YOUR PROFILE</button>
                </div>
            </header>
            <div style={contentStyle} className="content">
                <div style={leftContainerStyle} className="left-container">

                    <input
                        type="text"
                        placeholder="Search Word"
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                    <button className="button">Search</button>
                    {'\n'}
                    Aici SUB o sa fie graficele
                </div>

                <div style={rightContentStyle} className="right-container">
                    <div style={semicircleStyle} className="semicircle">
                            WORD OF THE DAY
                    </div>
                    <div style={squareInstagram} className="square">
                        Instagram
                        {'\n'}
                        top 5 posts la fiecare
                    </div>
                    <div style={squareFacebook} className="square">Facebook</div>
                    <div style={squareX} className="square">X</div>
                </div>
            </div>
            <footer style={footerStyle} className="footer">
                Word of the day
                <div style={rightContainerStyle} className="right-container">
                    <button>SEND US A MESSAGE</button>

                </div>
            </footer>
        </div>
    )


};

export default WordSearch;


//file u asta arata bine da nu i scris cu elemente din @mui/materials