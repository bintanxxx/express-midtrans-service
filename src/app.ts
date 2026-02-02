import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.route";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
app.use(cors()); // Buka akses ke semua domain (untuk tahap development)
app.use(helmet()); // Security headers standar
app.use(express.json()); // Parsing body request format JSON

// --- Routes ---
// Semua route pembayaran masuk ke prefix /api/payment
app.use("/api/payment", paymentRoutes);

// --- Health Check ---
// Endpoint sederhana untuk memastikan server nyala
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Universal Payment Service is Running! 🚀",
    mode:
      process.env.MIDTRANS_IS_PRODUCTION === "true"
        ? "Production"
        : "Sandbox (Test)",
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`=================================`);
});
