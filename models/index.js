const fs = require('fs');
const path = require('path');

const db = {};
const basename  = path.basename(__filename);

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach(file => {

        db[file.replace('.js', '')] = require(`./${file}`);
        
    });

console.log(db, '11')

module.exports = db;


// const User = require('./User');
// const Todo = require('./Todo');

// module.exports = [
//     {
//         modelName: 'User', model: User
//     },
//     {
//         modelName: 'Todo', model: Todo
//     }
// ]