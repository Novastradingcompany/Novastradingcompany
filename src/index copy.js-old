// src/index.js

import express from 'express';
import cors from 'cors';
const app = express();
// allow your React dev origin
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
// …your routes…

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';               // ← loads your Tailwind styles
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);