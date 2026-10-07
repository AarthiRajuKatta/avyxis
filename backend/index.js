import express from "express";
import dotenv from "dotenv";

import corsConfig from "./config/cors.js";
import securityMiddleware from "./config/security.js";

import { connectDB } from "./config/db.js";

import authRoutes from "./routes/public/auth.routes.js";

dotenv.config();

const app = express();

// DB Connection
await connectDB();

// Body Parser
app.use(express.json());

// CORS
corsConfig(app);


// Security
securityMiddleware(app);


// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Avyxis Backend Running 🚀",
    });
});


// routes
app.use("/api/public", authRoutes);



// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port http://localhost:${PORT}`);
});