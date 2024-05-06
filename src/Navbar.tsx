import { useState } from "react";
function Navbar() {
    const [navOpen, setNavOpen] = useState(true);
    const toggle = () => {
        setNavOpen(!navOpen);
    };
    return (
        <>
        
        </>
    )
}
export default Navbar;