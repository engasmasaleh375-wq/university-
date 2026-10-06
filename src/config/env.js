//src/config/env.js
export const API_BASE_URL = import.meta.env.VITE.API_BASE_URL;
if (!API_BASE_URL) {
    console.error("API ليس معرف في ملف !.env تحذير رابط ال");
}