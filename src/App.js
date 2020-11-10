 import React from 'react';
import Content from "./components/Content/Content";

function App(props) {

  return (
    <div className="App">
      <Content dialogsData={props.dialogsData}/>
    </div>
  );
}

export default App; 
