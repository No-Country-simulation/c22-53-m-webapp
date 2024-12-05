import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ShiftMedical } from "../pages/ShiftMedical";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shift" element={<ShiftMedical />} />
        </Routes>
      </Router>
    </>
  );
};
