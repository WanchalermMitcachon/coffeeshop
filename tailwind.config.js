/** @type {import('tailwindcss').Config} */

//   font-family: "Fraunces", serif;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fraunces: ["fraunces"],
      barlow: ["barlow"],
    },

    extend: {
      fontSize: {
        title: "150px",
        navigationMenu: "12px",
        body: "16px",
        h1: "72px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
      },
      lineHeight: {
        title: "72px",
        navigationMenu: "15px",
        body: "26px",
        h1: "72px",
        h2: "48px",
        h3: "36px",
        h4: "32px",
      },
      colors: {
        darkCyan: "#0E8784",
        darkGreyBlue: "#333D4B",
        paleOrange: "#FDD6BA",
        lightCream: "#FEFCF7",
        grey: "#83888F",
      },
      backgroundImage: {
        "hero-coffeepressMobile":
          "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        "hero-coffeepressTablet":
          "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        "hero-coffeepressDesktop":
          "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        "hero-coffeepressDesktop":
          "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        "hero-createplanMobile":
          "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
        "hero-createplanTablet":
          "url('/assets/plan/tablet/image-hero-blackcup.jpg')",
        "hero-createplanDesktop":
          "url('/assets/plan/desktop/image-hero-blackcup.jpg')",
        "hero-aboutusMobile":
          "url('/assets/about/mobile/image-hero-whitecup.jpg')",
        "hero-aboutusTablet":
          "url('/assets/about/tablet/image-hero-whitecup.jpg')",
        "hero-aboutusDesktop":
          "url('/assets/about/desktop/image-hero-whitecup.jpg')",
      },
    },
    screens: {
      sm: "360px",
      // => @media (min-width: 576px) { ... } Mobile

      md: "768px",
      // => @media (min-width: 960px) { ... } Tablet

      lg: "1280px",
      // => @media (min-width: 1440px) { ... } Desktop
    },
  },
  plugins: [],
};
