const express = require('express');
const dbConnection = require('./config/dbConnection');
const router = require('./routes/todoRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 4000
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json())

app.use('/api/v1', router)

app.get('/', (req, res)=>{
    res.send("Server is up")
});

app.listen(PORT, async()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
    await dbConnection();
})


