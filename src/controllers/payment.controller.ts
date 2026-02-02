import { Request, Response } from "express";
// Import semua fungsi dari service sebagai object 'paymentService'
import * as paymentService from "../services/payment.service";

export const createPayment = async (req: Request, res: Response) => {
  try {
    if (!req.body.orderId || !req.body.amount) {
      res.status(400).json({ error: "orderId dan amount wajib diisi" });
      return; // Jangan lupa return biar gak lanjut ke bawah
    }

    // Panggil langsung, gak pake 'this' atau 'new'
    const data = await paymentService.createTransaction(req.body);

    res.status(200).json({ status: "success", data });
  } catch (error: any) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const handleWebhook = async (req: Request, res: Response) => {
  try {
    await paymentService.handleNotification(req.body);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ status: "error" });
  }
};
