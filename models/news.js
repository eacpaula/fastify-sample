/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_news_category: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'category_news',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_publish: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_expiration: {
      type: DataTypes.DATE,
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
    tableName: 'news'
  });
};
