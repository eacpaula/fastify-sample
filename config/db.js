const Sequelize = require('sequelize');
const CONFIG = require("./config");

const env = process.env.NODE_ENV || 'development';

const connection = new Sequelize(
    CONFIG[env].database, 
    CONFIG[env].username, 
    CONFIG[env].password,
    {
        host: CONFIG[env].host,
        dialect: CONFIG[env].dialect,
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    }
);

module.exports = {
    conn: connection,
    test: connection.authenticate()
}

//Migration Reversal Engenier
// sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName] -C -e [dialect]