import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import paymentRoutes from './routes/payment.routes.js'; // Adjust path if needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet()); // Protects headers
app.use(cors());   // Allows developers to call your API
app.use(express.json()); // Parses JSON bodies

// Routes
app.use('/api/v1/payments', paymentRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'XecoFlow Online', uptime: process.uptime() });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 XecoFlow Gateway running on port ${PORT}`);
    console.log(`📡 Documentation available at: /docs (if hosted locally)`);
});