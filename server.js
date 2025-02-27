require('dotenv').config();
const express = require('express');
const categoryModel = require('./server/models/category.js');
const optionModel = require('./server/models/option.js');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:5500', 'https://www.outstandingspots.com', 'https://outstandingspots.com', 'https://web-production-888c9.up.railway.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/category', async (req, res) => {
    console.log('I am working');
    try {
        const categories = await categoryModel.find({}, 'name');
        res.json(categories);
    }
    catch (err) {
        console.log('get:', err);
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

app.get('/option', async (req, res) => {
    console.log('I am working');
    try {
        const options = await optionModel.find({}, 'photo category name name2 naverMap lat lon discount etc');
        res.json(options);
    }
    catch (err) {
        console.log('get:', err);
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let categories = [];
app.post('/data', async (req, res) => {
    console.log('Received POST request:', req.body);
    const name = req.body;
    try {
        const newC = new categoryModel({ name });
        await newC.save();
        res.status(201).json({ newC });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'One more time' });
    }
})

app.put('/category', async (req, res) => {
    console.log(req.body);
    console.log('요청 수신됨:', req.method, req.url, req.body);
    const { oldC, newC } = req.body;
    const category = await categoryModel.findOne({ name: oldC });
    category.name = newC;
    await category.save();
    res.status(201).json({ newC });
})

app.delete('/category', async (req, res) => {
    const cName = req.body.name;
    console.log(req.body.name);
    const del = await categoryModel.deleteOne({ name: cName });
    if (del.deletedCount === 1) {
        res.send('success(delete)');
    }
    else {
        res.status(400);
    }
})

app.post('/option', async (req, res) => {
    console.log(req.body);
    const { photo, category, name, name2, naverMap, lat, lon, discount, etc } = req.body;
    try {
        const newO = new optionModel({
            photo,
            category,
            name,
            name2,
            naverMap,
            lat,
            lon,
            discount,
            etc
        })
        await newO.save();
        res.status(201).json({ message: "매장 추가 성공" });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})

app.listen(PORT, () => {
    console.log('Server running');
})