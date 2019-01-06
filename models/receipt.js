/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receipt', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_receipt_category: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'receipt_category',
        key: 'id'
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    portions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'receipt'
  });
};
