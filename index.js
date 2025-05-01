import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
import router from './routes/authRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" });
})

app.use('/api/auth', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
