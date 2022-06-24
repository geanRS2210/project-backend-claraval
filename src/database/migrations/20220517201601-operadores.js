module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('operators', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('operators'),
};
