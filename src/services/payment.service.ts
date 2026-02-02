import { snap } from "../configs/midtrans";

// Langsung export fungsinya sebagai const
export const createTransaction = async (params: {
  orderId: string;
  amount: number;
  customerName?: string;
  customerEmail?: string;
  webhookUrl?: string;
}) => {
  const parameter = {
    transaction_details: {
      order_id: params.orderId,
      gross_amount: params.amount,
    },
    customer_details: {
      first_name: params.customerName || "Customer",
      email: params.customerEmail || "noreply@example.com",
    },
    custom_field1: params.webhookUrl,
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return {
      token: transaction.token,
      redirectUrl: transaction.redirect_url,
    };
  } catch (error) {
    console.error("Midtrans Error:", error);
    throw new Error(`Gagal membuat transaksi ke Midtrans`);
  }
};

export const handleNotification = async (notificationBody: any) => {
  try {
    const statusResponse = await (snap as any).transaction.notification(
      notificationBody,
    );

    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;

    console.log(
      `[Webhook] Order ID: ${orderId} | Status: ${transactionStatus}`,
    );

    return statusResponse;
  } catch (error) {
    console.error("Notification Error:", error);
    throw error;
  }
};
