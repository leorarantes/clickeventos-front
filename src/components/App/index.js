import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MenuContext from "../../contexts/MenuContext";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Events from "../Events";
import MyEvents from "../MyEvents";
import MyEvent from "../MyEvent";

export default function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <BrowserRouter>
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/events" element={<Events />} />
                <Route path="/my-events" element={<MyEvents />} />
                <Route path="/my-events/:id" element={<MyEvent />} />
            </Routes>
            </MenuContext.Provider>
        </BrowserRouter>
    );
}