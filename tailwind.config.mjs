import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        nord: {
          /* Tailwind-like Nord color names */
          0: "#2E3440",
          1: "#3B4252",
          2: "#434C5E",
          3: "#4C566A",
          4: "#D8DEE9",
          5: "#E5E9F0",
          6: "#ECEFF4",
          7: "#8FBCBB",
          8: "#88C0D0",
          9: "#81A1C1",
          10: "#5E81AC",
          11: "#BF616A",
          12: "#D08770",
          13: "#EBCB8B",
          14: "#A3BE8C",
          15: "#B48EAD",
        },
      },
      typography: ({ theme }) => ({
        slate: {
          css: {
            // "--tw-prose-body": theme("colors"),
            // "--tw-prose-headings": theme("colors"),
            // "--tw-prose-lead": theme("colors"),
            //"--tw-prose-links": theme("colors.red[500]"),
            // "--tw-prose-bold": theme("colors"),
            // "--tw-prose-counters": theme("colors"),
            "--tw-prose-bullets": theme("colors.red[500]"),
            // "--tw-prose-hr": theme("colors"),
            // "--tw-prose-quotes": theme("colors"),
            // "--tw-prose-quote-borders": theme("colors"),
            "--tw-prose-captions": theme("colors.slate[800]"),
            // "--tw-prose-code": theme("colors"),
            // "--tw-prose-pre-code": theme("colors"),
            // "--tw-prose-pre-bg": theme("colors"),
            // "--tw-prose-th-borders": theme("colors"),
            // "--tw-prose-td-borders": theme("colors"),

            // "--tw-prose-invert-body": theme("colors"),
            // "--tw-prose-invert-headings": theme("colors"),
            // "--tw-prose-invert-lead": theme("colors"),
            //--tw-prose-invert-links": theme("colors.red[500]"),
            // "--tw-prose-invert-bold": theme("colors"),
            // "--tw-prose-invert-counters": theme("colors"),
            "--tw-prose-invert-bullets": theme("colors.red[500]"),
            // "--tw-prose-invert-hr": theme("colors"),
            // "--tw-prose-invert-quotes": theme("colors"),
            // "--tw-prose-invert-quote-borders": theme("colors"),
            "--tw-prose-invert-captions": theme("colors.slate[200]"),
            // "--tw-prose-invert-code": theme("colors"),
            // "--tw-prose-invert-pre-code": theme("colors"),
            // "--tw-prose-invert-pre-bg": theme("colors"),
            // "--tw-prose-invert-th-borders": theme("colors"),
            // "--tw-prose-invert-td-borders": theme("colors"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
