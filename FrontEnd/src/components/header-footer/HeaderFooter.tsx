import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface HeaderAndFooterProps {
    children: ReactNode;
}
function HeaderAndFooter({children}: HeaderAndFooterProps) {
    return(
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default HeaderAndFooter