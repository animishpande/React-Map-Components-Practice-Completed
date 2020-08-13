import React from "react";
import emojipedia from "../emojipedia";
import Emojimeaning from "./Emojimeaning";
console.log(emojipedia);


function Entry(newEntry) {
  return <Emojimeaning 
  key= {newEntry.id}
  emoji={newEntry.emoji}
  name={newEntry.name}
  meaning={newEntry.meaning}  
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    

     <dl className="dictionary">
     {emojipedia.map(Entry)}
      </dl>
    </div>
  );
}

export default App;
