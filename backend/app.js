const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
