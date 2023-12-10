import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //   FOR SOME FKING REASON IF WE UNCOMMENT THE MAIN PAGE WILL RENDER TWICE
  //   SO THE BEST SOLUTION WAS TO COMMENT IT... TY FOR YOUR TIME
  //   KISS LOVE FROM LUCAS & ANDREW
  //   -- TOOK US LIKE OUR WHOLE SUNDAY AND A BUNCH OF OTHER FILE MODIFICATION
  //   BUT IN THE END WE FIGURED IT OUT... AT LEAST FOR THE MOMENT --
  //   AGAIN... KISS LOVE LANDREAS SIPOP <3
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
