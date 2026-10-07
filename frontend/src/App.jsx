import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import RootLogin from "./root_login";
import CompanyLogin from "./company_login";
import HeroLanding from "./hero_landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        
        <Route
          path="/root/login"
          element={<RootLogin />}
        />

        <Route
          path="/:company_key/login"
          element={
            <CompanyLogin />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
