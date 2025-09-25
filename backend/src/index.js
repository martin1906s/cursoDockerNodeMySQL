const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET

app.use(express.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

console.log(`Port: ${port}`);
console.log(`JWT Secret: ${jwtSecret}`);
