const express = require('express');
const apiRouter = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

// ROUTES
apiRouter(app);

app.listen(PORT, () => {
    console.log(`API UP ${PORT}`);
});


