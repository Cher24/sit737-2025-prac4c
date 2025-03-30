import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Addition
app.get("/add", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    res.json({ result: parseFloat(a) + parseFloat(b) });
});

// Subtraction
app.get("/subtract", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    res.json({ result: parseFloat(a) - parseFloat(b) });
});

// Multiplication
app.get("/multiply", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    res.json({ result: parseFloat(a) * parseFloat(b) });
});

// Division
app.get("/divide", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    if (parseFloat(b) === 0) return res.status(400).json({ error: "Cannot divide by zero" });
    res.json({ result: parseFloat(a) / parseFloat(b) });
});

// Exponentiation (New)
app.get("/power", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    res.json({ result: Math.pow(parseFloat(a), parseFloat(b)) });
});

// Square Root (New)
app.get("/sqrt", (req, res) => {
    const { a } = req.query;
    if (!a) return res.status(400).json({ error: "Missing parameter" });
    if (parseFloat(a) < 0) return res.status(400).json({ error: "Cannot calculate square root of a negative number" });
    res.json({ result: Math.sqrt(parseFloat(a)) });
});

// Modulo (New)
app.get("/modulo", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) return res.status(400).json({ error: "Missing parameters" });
    res.json({ result: parseFloat(a) % parseFloat(b) });
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Enhanced Calculator Microservice!");
});

// Start server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
