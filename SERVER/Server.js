require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/db');
const userRoute = require('./ROUTER/userRoute');
const cors = require('cors');
const errorMiddleware = require('./MIDDLEWARE/errorMiddleware');

connectDB();
const PORT = process.env.PORT || 3000;

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send("server created");
});

app.use('/auth/users', userRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
});
