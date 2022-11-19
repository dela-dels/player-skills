// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";

export default async (req, res) => {
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

  res.json({
    data: player,
  });
};
