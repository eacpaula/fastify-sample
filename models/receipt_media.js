/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receipt_media', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_receipt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'receipt',
        key: 'id'
      }
    },
    id_media: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'media',
        key: 'id'
      }
    }
  }, {
    tableName: 'receipt_media'
  });
};
