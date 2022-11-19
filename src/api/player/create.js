// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
  console.log("player details", req.body);

  const player = await Player.create(
    {
      name: req.body.name,
      position: req.body.position,
      skills: req.body.skills,
    },
    {
      include: "skills",
    }
  );

  console.log("Player created: ", player);

  res.json({
    data: player,
  });
};
