import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function DashBoard() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </>
  )
}
