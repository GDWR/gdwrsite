module.exports = {
  content: [
    './src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        gdwr: {
          css: {
            '--tw-prose-invert-links': theme('colors.orange[300]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
