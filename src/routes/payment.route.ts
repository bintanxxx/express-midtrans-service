import { Router } from "express";
import {
  createPayment,
  handleWebhook,
} from "../controllers/payment.controller";

const router = Router();

// POST /api/payment/create
router.post("/create", createPayment);

// POST /api/payment/notification
router.post("/notification", handleWebhook);

export default router;
