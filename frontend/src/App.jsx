import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./constants/Router";
import DarkmodeButton from "./components/DarkmodeButton";

function App() {

  return (
    <div>
      <DarkmodeButton />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
