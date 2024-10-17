const mongoose = require ('mongoose');

const immoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    descritpion: {type: String, required: true},
    picture: {type: String, required: true}
},{collection: 'biens'});

const Immo = mongoose.model('Immo', immoSchema);
module.exports = Immo;