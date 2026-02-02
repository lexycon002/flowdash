/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Standard Colors
        'primary': '#0d6efd',
        'secondary': '#6c757d',
        'success': '#198754',
        'info': '#0dcaf0',
        'warning': '#ffc107',
        'danger': '#dc3545',
        
        // --- DYNAMIC THEME COLORS (Mapped to CSS Variables) ---
        'body-bg': 'var(--body-bg)',       // Main app background
        'sidebar-bg': 'var(--sidebar-bg)', // Sidebar background
        'card-bg': 'var(--card-bg)',       // Widget/Card background
        'text-main': 'var(--text-main)',   // Main headings
        'text-muted': 'var(--text-muted)', // Secondary text
        'border-color': 'var(--border-color)', 
        'input-bg': 'var(--input-bg)',
      },
      fontFamily: {
        'sans': ['"Noto Sans"', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}