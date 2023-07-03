import React from 'react';
import ReactDOM from "react-dom/client";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./config/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
