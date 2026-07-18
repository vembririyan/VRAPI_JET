// middleware/rate-limit.ts

import rateLimit from "express-rate-limit";

export default rateLimit({
  windowMs: 60 * 1000, // 1 menit
  limit: 100, // Maksimal 100 request/IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too Many Requests",
  },
});
