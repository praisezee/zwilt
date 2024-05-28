import { Outlet } from "react-router-dom";
import { MainProvider } from "../context/MainContex";
import Header from "../components/Header";
import Footer from "../components/Footer";


const RouteSetup = () =>
{
  return (
    <div className="h-screen overflow-x-hidden">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const Layout = () => {
  return (
    <MainProvider>
      <RouteSetup />
    </MainProvider>
  )
}

export default Layout
