const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const appEx = express();
appEx.use(bodyParser.json());

// Configuración de CORS
appEx.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// READ DATA
const readData = () => {
    try{
        const data = fs.readFileSync("./data.json");
        return (JSON.parse(data));
    } catch(error) {
        console.log(error);
    }
};

// WRITHE DATA
writeData = (data) =>{
    try{
        fs.writeFileSync("./data.json", JSON.stringify(data));
    } catch(error) {
        console.log(error);
    }
};

// Endpoints
    appEx.get("/", (req, res) => {
        res.send("hola, esto es la raiz");
    });

    // OBTENER TODAS LAS FICHAS
    appEx.get("/fichas", (req, res) => {
        const data = readData();
        res.json(data.fichas);
    });

    // OBTENER UNA FICHA CON EL ID
    appEx.get("/fichas/:id", (req, res) => {
        const data = readData();
        const id = parseInt(req.params.id);
        const ficha = data.fichas.find((ficha) => ficha.id === id);
        res.json(ficha);
    });

    // CREAR UNA FICHA NUEVA
    appEx.post("/fichas", (req, res) => {
        const data = readData();
        const body = req.body;
        const newFicha = {
            id: data.fichas.length + 1,
            ...body,
        };
        data.fichas.push(newFicha);
        writeData(data);
        res.json(newFicha);
    });

    // ACTUALIZAR FICHA
    appEx.put("/fichas/:id", (req, res) => {
        const data = readData();
        const body = req.body;
        const id = parseInt(req.params.id);
        const fichaIndex = data.fichas.findIndex((ficha) => ficha.id === id);
        data.fichas[fichaIndex] = {
            ...data.fichas[fichaIndex],
            ...body,
        };
        writeData(data);
        res.json({ message: "Ficha actualizada"});
    });

    // ELIMINAR FICHA
    appEx.delete("/fichas/:id", (req, res) => {
        const data = readData();
        const id = parseInt(req.params.id);
        const fichaIndex = data.fichas.findIndex((ficha) => ficha.id === id);
        data.fichas.splice(fichaIndex, 1);
        writeData(data);
        res.json({message: "Ficha eliminada"})
    });

// ESCUCHANDO SERVIDOR
appEx.listen(3000, () => {
    console.log('SERVER LISTENING ON PORT 3000');
});