/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          DEFAULT: 'var(--navy)',
          light: 'var(--navy-light)',
          lighter: 'var(--navy-lighter)',
        },
        slate: {
          DEFAULT: 'var(--slate)',
          light: 'var(--slate-light)',
          lightest: 'var(--slate-lightest)',
        },
        green: {
          accent: 'var(--accent)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          secondary: 'var(--accent-secondary)',
        },
      },
    },
  },
  plugins: [],
}
