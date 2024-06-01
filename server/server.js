import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Menggunakan middleware cors

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_food'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

app.get('/data', (req, res) => {
  connection.query('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.error('Error when querying database: ' + err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const data = res.json(rows);
  });
});

app.post('/insert_data', (req, res) => {
  const products = req.body; // Mendapatkan array produk dari body request

  // Memastikan bahwa req.body berupa array
  if (!Array.isArray(products)) {
    res.status(400).json({ error: 'Body should be an array of products' });
    return;
  }

  // Membuat array untuk menyimpan ID dari produk yang berhasil dimasukkan
  const insertedProductIds = [];

  // Loop melalui setiap produk dalam array
  for (const product of products) {
    const { name, href, price, imagesrc, imagealt, jenis, daerah } = product;

    // Memastikan bahwa properti name tidak kosong
    if (!name) {
      res.status(400).json({ error: 'Field "name" is required' });
      return;
    }

    // Menyiapkan objek newProduct
    const newProduct = { name, href, price, imagesrc, imagealt, jenis, daerah };

    // Memasukkan data baru ke dalam tabel products
    connection.query('INSERT INTO products SET ?', newProduct, (err, result) => {
      if (err) {
        console.error('Error when inserting data into database: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      console.log('New product created with ID: ' + result.insertId);
      insertedProductIds.push(result.insertId);
    });
  }

  // Mengirimkan respons setelah semua produk berhasil dimasukkan
  res.status(201).json({ message: 'Products created successfully', productIds: insertedProductIds });
});

app.get('/daerah', (req, res) => {
  connection.query('SELECT * FROM daerah', (err, rows) => {
    if (err) {
      console.error('Error when querying database: ' + err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
