import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import LoginView from "./views/LoginView"
import RegisterView from "./views/RegisterView"
import LandingPage from "./views/LandingPage"

function Router() {


  return (
    <BrowserRouter>


      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<LandingPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
