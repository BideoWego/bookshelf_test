const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);
const { Model } = bookshelf;



const User = Model.extend({
  tableName: 'users',
  hasTimestamps: true
});


const user = new User({
  fname: 'George',
  lname: 'Costanza',
  email: 'george_costanza@gmail.com'
});


user.save()
  .then(user => {
    console.log(
      user.get('fname'),
      user.get('lname'),
      user.get('email'),
      user.fname,
      user.lname,
      user.email,
      user.get('created_at'),
      user.get('updated_at')
    )
  })
  .catch(console.error)
  .then(() => process.exit());


