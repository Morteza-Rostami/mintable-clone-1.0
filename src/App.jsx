import { Route, Routes } from "react-router-dom";
import HomePage from "pages/homePage/HomePage";
import LayoutA from "layouts/LayoutA";

import { createContext, useState } from "react";

// context for dark mode
export const DarkContext = createContext() 

const App = () => {
  const [dark, setDark] = useState(false)

  return (
    <DarkContext.Provider
      value={[dark, setDark]}
    >
      <div 
        className={`${dark ? 'dark' : ''}`}
      >
        {/* <BreakpointsContext.Provider
          value={breaks}
        > */}
          <Routes>

            <Route 
              element={<LayoutA/>}
            >
              <Route
                path="/"
                element={<HomePage/>}
              >
              </Route>
            </Route>

          </Routes>
        {/* </BreakpointsContext.Provider> */}
      </div>
    </DarkContext.Provider>
  );
}

export default App;
