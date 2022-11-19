// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------

import Sequelize from "sequelize";
import database from "../index";

const PlayerSkill = database.define(
  "player_skill",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    skill: {
      type: Sequelize.STRING(200),
    },
    value: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default PlayerSkill;
