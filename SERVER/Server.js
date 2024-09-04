require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/db');
const userRoute = require('./ROUTER/user');
const adminRoute=require('./ROUTER/admin');
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
app.use('/uploads/images', express.static('uploads/images'));


app.get('/', (req, res) => {
    res.send("server created");
});

app.use('/api/users', userRoute);
app.use('/api/admin',adminRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
});
