const User = require('../model/user.js');

module.exports = async (req, res) => {
    const login = req.body.log;
    const password = req.body.pas;
    const user = await User.findOne({ "login": req.body.log });
    if (user) {
        console.log('Юзер уже есть');
        req.res.send('Юзер уже есть');

    } else {
        const newUser = new User({ login, password });
        await newUser.save();
        console.log('Юзер добавлен');
        req.res.send('Юзер добавлен');
    }
}    
    
    //console.log(typeof(login), typeof(user));
    //console.log(user);
    //login == user.login ? console.log('Юзер уже есть'): console.log('Не работает');
    //const newUser = new User({ login, password });
    //await newUser.save();
    //console.log (req.body.log);
    //console.log (req.body.pas);
    //const newUser = new User({ login, password});
    //await newUser.save();
    //r.res.send('Юзер добавлен');
    /*if (user.length > 0) { 
        console.log('Юзер уже есть');  
        req.res.send('Юзер уже есть'); 
        
} else {
const newUser = new User({ login, password});
await newUser.save();
console.log('Юзер добавлен');
req.res.send('Юзер добавлен');
}*/