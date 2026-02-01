# 🚀 Universal Payment Gateway Service

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Midtrans](https://img.shields.io/badge/Payment-Midtrans-blue?style=for-the-badge)](https://midtrans.com/)

**Universal Payment Gateway** adalah microservice siap pakai (ready-to-use) yang berfungsi sebagai jembatan penghubung antara aplikasi Anda dengan Payment Gateway (saat ini mendukung **Midtrans**).

Project ini didesain sebagai **"Black Box" Infrastructure**. Aplikasi utama Anda (baik itu PHP Laravel, Python Django, Go, atau Flutter) tidak perlu pusing memikirkan logika integrasi payment gateway. Cukup tembak API service ini, dan terima pembayaran.

## ✨ Fitur Utama

- **⚡ Framework Agnostic:** Bisa digunakan oleh aplikasi backend/frontend apa saja yang mendukung HTTP Request.
- **🛡️ Type-Safe:** Dibangun menggunakan TypeScript untuk meminimalisir bug saat runtime.
- **🐳 Dockerized:** Siap dijalankan di environment manapun (Linux, Windows, Mac) tanpa instalasi ribet.
- **📡 Dynamic Webhook Forwarding:** Fitur unggulan! Service ini bisa meneruskan notifikasi status pembayaran (Paid/Expired) ke URL spesifik yang diminta oleh Client secara dinamis.

---

## 🛠️ Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1.  **Docker Desktop** (Sangat disarankan).
2.  Atau **Node.js v18+** (Jika ingin menjalankan manual tanpa Docker).
3.  Akun **Midtrans Sandbox** (Untuk mendapatkan Server Key & Client Key).

---

## 🚀 Cara Menjalankan (Quick Start)

Cara termudah dan tercepat adalah menggunakan Docker.

### 1. Clone Repository

```bash
git clone [https://github.com/bintanxxx/express-midtrans-service.git](https://github.com/bintanxxx/express-midtrans-service.git)
cd universal-payment-gateway
```
