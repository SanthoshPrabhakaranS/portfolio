import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './-app';
import { ThemeProvider } from "@mui/material";
import { theme } from './theme/theme';
import AppContext from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </AppContext>
  </React.StrictMode>
);
