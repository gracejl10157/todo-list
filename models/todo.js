"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      text: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );

  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
