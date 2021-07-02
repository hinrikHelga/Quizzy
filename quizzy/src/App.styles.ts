import styled, { createGlobalStyle, keyframes } from 'styled-components';
import BGImage from './images/background_img.jpg';

const flicker = keyframes `
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
        0 0 4px #720B0B,
        0 0 11px #720B0B,
        0 0 19px #720B0B,
        0 0 40px #E51616,
        0 0 80px #E51616,
        0 0 90px #E51616,
        0 0 100px #FF3131,
        0 0 150px #FF3131;
    }

    20%, 24%, 55% {        
        text-shadow: none;
    } 
`

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box; 
        font-family: 'Catamaran', sans-serif
    }
`

export const QuizWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #FBFFFF
    }

    > score {
        color: #FBFFFF;
        font-size: 3em;
        margin: 0;
        text-shadow:
            0 0 7px #FC4827,
            0 0 10px #FF3131,
            0 0 21px #FF3131,
            0 0 42px #FF3131,
            0 0 82px #E51616,
            0 0 92px #E51616,
            0 0 102px #E51616,
            0 0 151px #720B0B;
    }

    > h3 {
        font-family: 'Catamaran', sans-serif;
        font-size: 22px;
        color: #FBFFFF;
        text-shadow:
            0 0 7px #FC4827,
            0 0 10px #FC4827,
            0 0 21px #FF3131,
            0 0 42px #FF3131,
            0 0 82px #E51616,
            0 0 92px #E51616,
            0 0 102px #E51616,
            0 0 151px #720B0B;
    }

    > h1 {
        /* animation: ${flicker} 0.11s ease-in-out infinite alternate; */
        font-family: 'Catamaran', sans-serif;
        font-size: 70px;
        font-weight: 400;
        color: #FBFFFF;
        margin: 20px;
        text-shadow:
            0 0 7px #FC4827,
            0 0 10px #FF3131,
            0 0 21px #FF3131,
            0 0 42px #FF3131,
            0 0 82px #E51616,
            0 0 92px #E51616,
            0 0 102px #E51616,
            0 0 151px #720B0B;
    }

    .start, .next {
        cursor: pointer;
        background-color: #FC4827;
        border: 2px solid #FC4827;
        border-radius: 30px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px
    }
`