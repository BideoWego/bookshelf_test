

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('fname');
    t.string('lname');
    t.string('email');

    // t.timestamp('created_at')
    //   .notNullable()
    //   .defaultTo(
    //     knex.raw('now()')
    //   );
    // t.timestamp('updated_at')
    //   .notNullable()
    //   .defaultTo(
    //     knex.raw('now()')
    //   );
    t.timestamps();
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};



