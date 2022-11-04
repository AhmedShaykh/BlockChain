import express from 'express';
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>Node Responding From HTTP Server</h1>');
});

app.get('/user', (req, res) => {
    res.json({ message: "Learning Express" });
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});