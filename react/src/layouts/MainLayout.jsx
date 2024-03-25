import React from "react";
import NavbarWithSearch from "../Components/Navbar";
import FooterWithLogo from "../Components/Footer";

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <NavbarWithSearch />
            <main>{children}</main>
            <FooterWithLogo />
        </div>
    );
};

export default Layout;
