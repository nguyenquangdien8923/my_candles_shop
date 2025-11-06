// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // 👉 căn giữa container
      padding: '1rem', // thêm padding đều 2 bên
    },
    extend: {},
  },
  plugins: [],
}
