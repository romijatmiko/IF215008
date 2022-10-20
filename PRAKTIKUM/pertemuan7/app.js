const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('romi ganteng!')
})

app.get('/user', (req, res) => {
  res.json([
    {
      id : 1,
      username: "romijatmiko",
      password: 1234,
    },
    {
      id : 2,
      username: "user",
      password: 121,
    }    
  ])
})
app.get('/admin', (req, res) => {
  res.json([
    {
      id : 1,
      username: "admin",
      password: "admin123",
    },
    {
      id : 2,
      username: "admin2",
      password: "admin2",
    }    
  ])
})
app.get('/menu', (req, res) => {
  res.json([
    {
      id : 1,
    name: "Ayam Geprek Kocak",
    description:
      "Ayam Geprek Sangat Enak",
    price: 20000,
    StockTersedia: 10,
    },
    {
      id : 2,
      name: "Ayam Geprek Hehe",
    description:
      "Ayam Geprek Sangat Enak",
    price: 100000,
    StockTersedia: 10,
    }    
  ])
})

// Lihat detail buku
app.get('/menu/:id', (req, res) => {
  res.json(
    {
      id : 1,
    name: "Ayam Geprek Kocak",
    description:
      "Ayam Geprek Sangat Enak",
    price: 20000,
    StockTersedia: 10,
    },
    {
      id : 2,
      name: "Ayam Geprek Hehe",
    description:
      "Ayam Geprek Sangat Enak",
    price: 100000,
    StockTersedia: 10,
    }    
  )
})

// Tambah buku
app.post('/menu', (req, res) => {
  res.json(
    {
        id : 3,
      name: "Minuman Enak",
      description:
        "Enak Kokkk",
      price: 20000,
      StockTersedia: 10,
      },
      {
        id : 4,
      name: "Minuman Enak",
      description:
        "Enak Kokkk",
      price: 20000,
      StockTersedia: 10,
      }    
  )
})

// Hapus buku
app.delete('/menu/:id', (req, res) => {
  res.json(
    {
      id : 4,
      name: "Minuman Enak",
      description:
        "Enak Kokkk",
      price: 20000,
      StockTersedia: 10,
      } 
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})