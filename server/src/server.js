import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready.')
});

app.get('/api/products', (req, res) => {
    res.send(data)
}
)

app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:4000`)
  });