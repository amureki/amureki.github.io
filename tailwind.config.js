module.exports = {
  purge: ["./templates/**/*.html"],
  theme: {
		extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
	},
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
