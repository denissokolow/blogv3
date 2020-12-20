const {MONGO} = require("../config/config")
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

(async () => await mongoose.connect(`mongodb://${MONGO}`))();

module.exports = mongoose.model('Blog', new mongoose.Schema({
    
    author: String,
    date: String,
    title: String,
    content: String 
    
}));
