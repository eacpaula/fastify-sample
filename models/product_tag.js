/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_tag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_product: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    id_tag_product: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tag_product',
        key: 'id'
      }
    }
  }, {
    tableName: 'product_tag'
  });
};
