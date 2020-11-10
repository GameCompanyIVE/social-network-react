import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dialogsData = [
    {image:"images/messages/1_chat.jpg", name:"Rock William", id:"1", text:"Hi what are you doing", data:"Today, 02.00PM"},
    {image:"images/messages/2_chat.jpg", name:"Rock William", id:"2", text:"Hi how are you miss", data:"Today, 02.05PM"},
    {image:"images/messages/3_chat.jpg", name:"Johnson Dua", id:"3", text:"Hi how are you Today", data:"Yesterday, 11.50AM"}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

