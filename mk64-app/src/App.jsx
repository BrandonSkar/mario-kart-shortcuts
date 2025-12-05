import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mk64" element={<HomePage />} />
                <Route path="/mk64/:code" element={<CoursePage />} />
            </Routes>
        </BrowserRouter>
    );
}
