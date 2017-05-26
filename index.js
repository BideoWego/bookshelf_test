const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);
const { Model } = bookshelf;



const User = Model.extend({
  tableName: 'users',
  hasTimestamps: true
});


module.exports = { User };


