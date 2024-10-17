import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi_base_de_datos')
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Aquí puedes añadir más rutas y middleware

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});