import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import leadRoutes from './routes/leads.js';
import propertyRoutes from './routes/properties.js';
import errorHandler from './middleware/errorHandler.js';  // Assuming you have an error handler middleware

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/properties', propertyRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
