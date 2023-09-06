import { Outlet } from "react-router-dom";
import NavBar from "../../layout/shared/NavBar/NavBar";
import Footer from "../../layout/shared/Footer/Footer";


const Root = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;