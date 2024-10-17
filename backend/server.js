const express = require ('express');
const cors = require ('cors');
const app = express ();
const PORT = process.env.PORT||5050;
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/immoTest';

app.use (express.json());
app.use (cors());
app.use('/assets/images', express.static('assets/images'));

mongoose.connect(mongoURI)
    .then(() => console.log('connecter à mongoDB'))
    .catch((err) => console.error('erreure de connection à mongoDB:', err));

const Immo = require('./models/immoModels');

app.get ('/api/immo', async (req, res)=>{
    try {
        const immos = await Immo.find();
        res.json(immos);
    } catch (err) {
        res.status(500).json({ message: 'erreur lors de la récupération des données'});
    }
});


app.listen(PORT, ()=>{
    console.log(`Serveur is runnng on https://localhost:${PORT}`);
});