const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const {
  default : flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        "customHeight" : "695px"
      },
      animation:{
        aurora :"aurora 60s linear infinite",
        shimmer:"shimmer 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes:{
        scroll:{
          to:{
            transform: "translate(calc(-50% - 0.5rem))"
          },
        },
        
        aurora:{
          from:{
            backgroundPosition:"50% 50%, 50% 50%",
          },
          to:{
            backgroundPosition:"350% 50%, 350% 50%",
          }
        },
        shimmer:{
          from:{
            backgroundPosition:"0 0",
          },
          to:{
            backgroundPosition:"-200% 0",
          }
          }
        }
      }
    },
      plugins: [addVariablesForColors],
    };

    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
     
      addBase({
        ":root": newVars,
      });
    
    }