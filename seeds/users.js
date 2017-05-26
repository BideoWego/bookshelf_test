const users = [];
for (let i = 1; i < 10; i++) {
  users.push({
    id: i,
    fname: `Foo${ i }`,
    lname: `Bar${ i }`,
    email: `foobar${ i }@gmail.com`
  });
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
