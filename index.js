const { Sequelize } = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Recipe = require('./recipe')(sequelize);
const User = require('./user')(sequelize);
const Profile = require('./profile')(sequelize);

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  Recipe,
  User,
  Profile,
};
