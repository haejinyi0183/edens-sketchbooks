const User = require('./userSchema');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        
       module.exports = user;
    } catch (e) {
        console.log(e);
    }  
};

module.exports = createUser;

