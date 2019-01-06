/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('score', {
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
    from: {
      type: DataTypes.STRING,
      allowNull: true
    },
    point: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_user_created: {
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
    tableName: 'score'
  });
};
