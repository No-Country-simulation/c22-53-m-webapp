import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import LoginView from "./views/LoginView"
import RegisterView from "./views/RegisterView"
import LandingPage from "./views/LandingPage"
import { DashBoardLayout } from "./layouts/DashBoardLayout"

function Router() {


  return (
    <BrowserRouter>


      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/" element={<LandingPage />} />
        </Route>


        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
