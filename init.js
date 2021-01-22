// init.js will exec application(app.js)
import app from "./app";

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

// M(Model): data
// V(View): how does the data look
// C(Controller): function that looks for the data