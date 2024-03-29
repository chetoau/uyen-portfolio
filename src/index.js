import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
const app = <div style={{width: "100%"}}><App /></div>;
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <Intro />
//     <div style={{maxWidth: "1400px"}}>
//       <App />
//     </div>
//   </div>
// );