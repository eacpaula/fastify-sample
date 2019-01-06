/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_product', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'category_product'
  });
};
