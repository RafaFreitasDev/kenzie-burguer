import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-green-1: #27ae60;
    --color-green-2: #93d7af;
    --color-red-1: #eb5757;
    --color-gray-0: #f5f5f5;
    --color-gray-20: #e0e0e0;
    --color-gray-50: #333333;
    --color-gray-100: #212529;
    --color-negative:#e60000;
    --color-warning:#ffcd07;
    --color-sucess:#168821;
    --color-information:#155bcb;
    --font-size-title-1: 1.6rem;
    --font-size-title-2: 1.4rem;
    --font-size-title-3: 1.1rem;
    --font-size-title-4: 0.9rem;
    --font-size-headline: 1rem;
    --font-size-parag: 0.9rem;
    --font-weight-title: 700;
  
}

body{
    font-family: 'Inter', sans-serif;
    background-color: white;
    
}

button{
    cursor: pointer;
}

`