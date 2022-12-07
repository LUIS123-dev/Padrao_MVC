const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodemvc','root','mynewpassword',{
    host:'db',
    dialect:'mysql',
})

sequelize.sync({});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = sequelize;

