/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    from: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_category_product: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'category_product',
        key: 'id'
      }
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'product'
  });
};
