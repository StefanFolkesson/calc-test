const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

function calculate(op, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch(op) {
    case 'add': return a + b;
    case 'sub': return a - b;
    case 'mul': return a * b;
    case 'div': return b !== 0 ? a / b : 'NaN';
    default: return null;
  }
}

app.get('/calc/:op', (req, res) => {
  const { op } = req.params;
  const { a, b } = req.query;
  const result = calculate(op, a, b);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`API körs på http://localhost:${port}`);
});