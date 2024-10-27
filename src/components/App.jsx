import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

const createCard = (data) => {
  return (
    <Card
      key={data.id}
      name={data.name}
      img={data.emoji}
      meaning={data.meaning}
    />
  );
};

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
};

export default App;
