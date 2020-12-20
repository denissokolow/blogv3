const mongoose = require('mongoose');
const {MONGO} = require("../config/config")
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

(async () => await mongoose.connect(`${MONGO}`))();

module.exports = mongoose.model('User', new mongoose.Schema({
    
    login: String,
    password: String
        
}));