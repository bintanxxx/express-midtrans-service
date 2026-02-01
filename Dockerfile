# 1. Gunakan base image Node.js versi 18 (versi LTS yang stabil & ringan)
FROM node:18-alpine

# 2. Set folder kerja di dalam container menjadi /app
WORKDIR /app

# 3. Copy file package dulu (package.json & package-lock.json)
# Trik ini supaya Docker bisa nge-CACHE layer ini. 
# Jadi kalau kamu cuma ubah kodingan (src/), proses 'npm install' bakal di-SKIP (hemat waktu build).
COPY package*.json ./

# 4. Install semua dependencies (termasuk devDependencies buat build TypeScript)
RUN npm install

# 5. Copy seluruh sisa kode sumber (src/) ke dalam container
COPY . .

# 6. Build TypeScript menjadi JavaScript (hasilnya masuk ke folder dist/)
RUN npm run build

# 7. Hapus devDependencies biar image lebih kecil (Opsional tapi bagus buat production)
# RUN npm prune --production

# 8. Buka port 3000 (sesuai app kamu)
EXPOSE 3000

# 9. Perintah yang dijalankan saat container start
CMD ["npm", "start"]