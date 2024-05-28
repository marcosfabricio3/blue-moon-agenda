const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const appEx = express();
const PORT = 3000;

appEx.use(bodyParser.json());
appEx.use(express.static('public'));

const dataFilePath = './data.json';

// Configuración de CORS
appEx.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
// READ DATA
function readData() {
    if (fs.existsSync(dataFilePath)) {
        const data = fs.readFileSync(dataFilePath);
        return JSON.parse(data);
    } else {
        return [];
    }
}

// WRITE DATA
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// CREATE DATA
appEx.post('/items', (req, res) => {
    const items = readData();
    const newItem = { id: Date.now(), ...req.body };
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
});

// READ
appEx.get('/items', (req, res) => {
    const items = readData();
    res.json(items);
});

// UPDATE
appEx.put('/items/:id', (req, res) => {
    const items = readData();
    const index = items.findIndex(item => item.id === parseInt(req.params.id));

    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        writeData(items);
        res.json(items[index]);
    } else {
        res.status(404).json({ message: 'item not found' });
    }
});

// DELET
appEx.delete('/items/:id', (req, res) => {
    let items = readData();
    items = items.filter(item => item.id !== parseInt(req.params.id));
    writeData(items);
    res.status(204).end();
});


appEx.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});