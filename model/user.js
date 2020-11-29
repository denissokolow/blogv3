const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

(async () => await mongoose.connect('mongodb://bloger:123@84.38.180.19/blog'))();

module.exports = mongoose.model('User', new mongoose.Schema({
    
    login: String,
    password: String
        
}));