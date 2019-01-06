/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_notification', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    id_notification: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'notification',
        key: 'id'
      }
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'user_notification'
  });
};
