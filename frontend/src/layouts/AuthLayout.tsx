import {  Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AuthLayout() {
  
 


  return (
     <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </>
  );
};