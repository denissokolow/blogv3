const {MONGO} = require("../config/config")
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

(async () => await mongoose.connect(`mongodb://${MONGO}`))();

module.exports = mongoose.model('User', new mongoose.Schema({
    
    login: String,
    password: String
        
}));