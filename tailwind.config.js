/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        SoftBlue: "hsl(195, 74%, 62%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        PaleBlue: "hsl(236, 100%, 87%)",
        VioletSocial: "hsl(264, 64%, 52%)",
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        LightRedWork: "hsl(15, 100%, 70%)",
        LightRedStudy: "hsl(348, 100%, 68%)",
        DesaturatedBlue: "hsl(235, 45%, 61%)",
        LimeGreenExercise: "hsl(145, 58%, 55%)",
        SoftOrangeSelfCare: "hsl(43, 84%, 65%)",
      },
    },
  },
  plugins: [],
};
