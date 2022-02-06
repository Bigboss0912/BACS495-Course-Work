import React, {useState} from "react";

function Body() {
  const [name, setName] = useState(0);

  

  return (
    <div>
      <input value={name} onInput={e => setName(e.target.value)}/>
      <div>Name is set to: {name}</div>
    </div>
  );
}

export default Body;