import express from 'express'
import morgan from 'morgan';

// anything from .env is a string
const PORT = Number(process.env.PORT) || 8080;

const app = express();

// set Logging lib
app.use(morgan('dev'));

// catch all route
app.use('*', (req, res) => {
  res.json({
    msg: '404!',
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`node-server running on port ${PORT}`);
});

