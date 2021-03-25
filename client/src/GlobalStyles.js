import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono&display=swap');

    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body {
        background: white; 
        font-family: 'Inter', sans-serif;
        margin: 0;
    }

    ul, ol, li{
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 3rem;
        font-weight: 600;
        margin: 0;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.438rem;
    }

    
    `