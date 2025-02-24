require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const imageRoutes = require("./routes/imageRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

const Image = require("./models/Image");

const app = express();

// app.use(cors());
app.use(cors({
    origin: "*",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));
app.use(helmet());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/images", imageRoutes);
// app.use("/assets", express.static("assets")); // Раздача изображений
app.use("/assets", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin"); // ⬅️ Добавь этот заголовок
    next();
});
app.use("/assets", express.static(path.join(__dirname, "assets"))); // Раздаем статические файлы из папки assets


// Защищённый маршрут (пример)
app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({ message: "Доступ разрешён", user: req.user });
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
});

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

sequelize
    .sync({ alter: true })
    .then(() => console.log("📦 DB updated with models"))
    .catch((err) => console.error("❌ Database sync error:", err));
