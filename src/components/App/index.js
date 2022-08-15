import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MenuContext from "../../contexts/MenuContext";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Events from "../Events";

export default function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <MenuContext.Provider value={{openMenu, setOpenMenu}}>
                    <Route path="/" element={<Events />} />
                </MenuContext.Provider>
            </Routes>
        </BrowserRouter>
    );
}