/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('score_parameterization', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_created_at: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_user_updated: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    tableName: 'score_parameterization'
  });
};
