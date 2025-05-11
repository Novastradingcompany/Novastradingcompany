// mock-backend.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

// Mock Chat endpoint
app.post('/api/chat', (req, res) => {
  console.log('🔔 Received /api/chat:', req.body);
  // simulate a 1s thinking delay
  setTimeout(() => {
    res.json({
      response: { role: 'assistant', content: 'Hello from mock Nova!' }
    });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`🚀 Mock backend running at http://localhost:${PORT}`);
});