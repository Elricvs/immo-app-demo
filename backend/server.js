const express = require ('express');
const cors = require ('cors');
const app = express ();
const PORT = process.env.PORT||5050;
const immo = {
    Name: 'Maison',
    Price: 300000,
    description: 'Voici une belle maison',
    picture: 'http://localhost:5050/assets/images/maisontest.jpg'
}

app.use (express.json());
app.use (cors());
app.use('/assets/images', express.static('assets/images'));

app.get ('/api/immo', (req, res)=>{
    res.json({immo});
});

app.listen(PORT, ()=>{
    console.log(`Serveur is runnng on https://localhost:${PORT}`);
});