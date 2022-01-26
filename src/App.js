import React, { useState, useEffect } from "react";
import Data from "./components/data/";
import UserContext from "./context";

function App() {
  console.log(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([{ user: "John" }]);
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <Data />
      </UserContext.Provider>
    </div>
  );
}

export default App;
