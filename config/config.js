const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    secret: crypto,
    url : 'mongodb://happierday:wu134679@ds135444.mlab.com:35444/happierday',
    email: 'jianchengw26@gmail.com'
}
