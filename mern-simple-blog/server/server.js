import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { connectDB } from './config/db.js';
import articlesRouter from './routes/article.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use('/api/articles', articlesRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, async () => {});
    } catch (error) {
        console.error(`Server startup error ${error.message}`);
        process.exit(1);
    }
};

startServer();
