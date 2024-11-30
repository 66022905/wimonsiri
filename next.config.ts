import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    domains: ['i.pinimg.com'], // เพิ่มโดเมน 'i.pinimg.com' ที่ใช้สำหรับโหลดภาพ
  },
};

