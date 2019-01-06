/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_media', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_news: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'news',
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
    tableName: 'news_media'
  });
};
