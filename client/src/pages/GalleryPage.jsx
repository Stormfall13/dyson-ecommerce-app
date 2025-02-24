import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import './gallery.css'

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
        const fetchImages = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/images`, {
                    method: "GET",
                    mode: "cors" // 👈 Добавляем CORS
                });
        
                if (!res.ok) throw new Error("Ошибка загрузки изображений");
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchImages();
    }, [token, navigate]);

    const deleteImage = async (id) => {
        if (!window.confirm("Удалить изображение?")) return;

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/images/${id}`, {
                method: "DELETE",
                mode: "cors", // 👈 Добавляем CORS
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if (!res.ok) throw new Error("Ошибка удаления");
            setImages(images.filter(img => img.id !== id));
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <div className="gallery-container">
            <Header />
            <h1>Галерея</h1>

            <div className="gallery">
                {images.length === 0 ? (
                    <p>Нет изображений</p>
                ) : (
                    images.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <img src={`${process.env.REACT_APP_API_URL}${image.filepath}`} alt={image.filename} />
                            <button onClick={() => deleteImage(image.id)}>Удалить</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
