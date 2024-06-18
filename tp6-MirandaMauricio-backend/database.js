const mongoose = require('mongoose');
const URI = 'mongodb://localhost/tp6Backend';

mongoose.connect(URI)
.then(db => console.log('DB Conectada'))
.catch(error => console.error(error))

module.exports = mongoose;