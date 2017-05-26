const repl = require('repl').start({});
const { User } = require('./index');


repl.context.User = User;




repl.context.lg = (...args) => console.log(...args);