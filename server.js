require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

console.log("Loaded SendGrid API Key:", process.env.API_SENDGRID);

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, './client/build')));

// routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// PORT
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
