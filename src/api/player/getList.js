// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";

export default async (req, res) => {
  const players = await Player.findAll();
  res.json({
    data: players,
  });
};
