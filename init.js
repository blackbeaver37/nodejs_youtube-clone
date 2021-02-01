// init.js will exec application(app.js)
import dotenv from 'dotenv';
dotenv.config();
import './db';
import './models/Video';
import './models/Comments';
import app from "./app";


const PORT = process.env.PORT;

const handleListening = () => {
    console.log(`🟩 Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
