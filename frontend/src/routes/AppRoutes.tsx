import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};
