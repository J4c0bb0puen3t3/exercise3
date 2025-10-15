import express from 'express';
import { connectDB } from './db.js';
import { Card } from './models/Card.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.post("/cards", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card).send("Card created successfully");
    console.log(card);
  } catch(error) {

  }
})

app.get("/hola", (req, res) => {
    res.status(200).send("welcome to my server");
});

app.listen(3000, () => {
    console.log("Server Ejecutandose en el puerto http://localhost:3000");
});

app.post("/send", (req, res) => {
    const {user, email } = req.body;
    console.log(`User: ${user}, Email: ${email}`);
    res.status(200).send("Data received successfully");
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});