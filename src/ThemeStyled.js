import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        red: "#EB5757",
        orange: "#F2994A",
        yellow: "#F2C94C",
        green: "#219653",
        blue: "#2F80ED",
        purple: "#9B51E0",
        aqua: "#5AA9E6",
        gray: "#828282",
        black: "#232323",
        blueMarine: "#DDFFDA",
        white: "#F9F9F9"
    },
    fontSizes: {
        big: "22px",
        medium: "20px",
        small: "18px"
    },
    buttonSizes: {
        default: "277px",
        small: "164px",
    },
    mixins: {
        sidebarHoverEffect: `
            transition: background-color 0.25s ease-out;
            
            &:hover {
                position: relative;
                border-radius: 5px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                background-color: #F9F9F9;
              }
        `
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;