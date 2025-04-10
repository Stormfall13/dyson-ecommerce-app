import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import GalleryPage from "./pages/GalleryPage";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                
                {/* 🔐 Защищенные маршруты (только для user и admin) */}
                {/* <Route path="/" element={ <ProtectedRoute allowedRoles={["user", "admin"]}> <Home /> </ProtectedRoute> } /> */}
                <Route path="/user" element={ <ProtectedRoute allowedRoles={["user", "admin"]}> <UserPage /> </ProtectedRoute> } />
                <Route path="/admin" element={ <ProtectedRoute allowedRoles={["admin"]}> <AdminPage /> </ProtectedRoute> } />
                <Route path="/gallery" element={ <ProtectedRoute allowedRoles={["admin"]}> <GalleryPage /> </ProtectedRoute> } />
                
                {/* Если страница не найдена — редирект на `/` */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
