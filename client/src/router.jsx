import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";


const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Home = lazy(() => import('./pages/Home'));
const UserPage = lazy(() => import('./pages/UserPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const OurPage = lazy(() => import('./pages/OurPage'));
const DeliveryPaymentPage = lazy(() => import('./pages/DeliveryPaymentPage'));
const RegisterProdPage = lazy(() => import('./pages/RegisterProdPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const CertificatePage = lazy(() => import('./pages/CertificatePage'));
const BucketPage = lazy(() => import('./pages/BucketPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ProductCard = lazy(() => import('./pages/ProductCard'));


const AppRouter = () => {

    return (
        <Router>
            <Suspense fallback={<div>Загрузка....</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/our" element={<OurPage />} />
                    <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
                    <Route path="/register-prod" element={<RegisterProdPage />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/certificate" element={<CertificatePage />} />
                    <Route path="/bucket" element={<BucketPage/>} />
                    <Route path="/products/:category" element={<ProductPage/>} />
                    <Route path="/product/:id" element={<ProductCard/>} />
                    
                    {/* 🔐 Защищенные маршруты (только для user и admin) */}
                    {/* <Route path="/" element={ <ProtectedRoute allowedRoles={["user", "admin"]}> <Home /> </ProtectedRoute> } /> */}
                    <Route path="/user" element={ <ProtectedRoute allowedRoles={["user", "admin"]}> <UserPage /> </ProtectedRoute> } />
                    <Route path="/admin" element={ <ProtectedRoute allowedRoles={["admin"]}> <AdminPage /> </ProtectedRoute> } />
                    <Route path="/gallery" element={ <ProtectedRoute allowedRoles={["admin"]}> <GalleryPage /> </ProtectedRoute> } />
                    
                    {/* Если страница не найдена — редирект на `/` */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
