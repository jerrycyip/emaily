const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send({ hi: 'there' });
});

const PORT = pocess.env.PORT || 5000;
app.listen(PORT);