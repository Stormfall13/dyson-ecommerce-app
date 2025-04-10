import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

import './header.css'

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="navbar">
            {/* Если пользователь авторизован, показываем "Личный кабинет" */}
            {user && (
                <>
                <Link to="/user">Личный кабинет</Link>
                <p>{user?.username || "Пользователь"}</p>
                <button onClick={handleLogout}>Выйти</button>
                </>
            )}

            {/* Если пользователь — админ, показываем "Админку" */}
            {user?.role === "admin" && <Link className="admin__link" to="/admin">Админка</Link>}

            {/* Если пользователь не авторизован, показываем "Вход" и "Регистрация" */}
            {!user && (
                <div className="auth">
                    <Link to="/login">Вход</Link>
                    <Link to="/register">Регистрация</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
