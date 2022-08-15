const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "genre",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
};
