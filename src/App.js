import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Main from "./components/Main"; 

function App() {
  const [clientToken, setClientToken] = useState(
    localStorage.getItem("clientToken")
  );

  const setToken = (token) => {
    setClientToken(token);
    localStorage.setItem("clientToken", token);
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            clientToken ? <Main /> : <Auth setClientToken={setToken} />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
