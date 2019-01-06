/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_message', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_root: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user_message',
        key: 'id'
      }
    },
    id_user_in: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    id_user_out: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user_message'
  });
};
