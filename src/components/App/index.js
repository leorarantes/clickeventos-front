import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../SignUp";
import SignIn from "../SignIn";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}