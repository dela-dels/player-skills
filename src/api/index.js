// /////////////////////////////////////////////////////////////////////////////
// PLEASE DO NOT MODIFY, RENAME OR REMOVE ANY OF THE CODE BELOW.
// ALSO DO NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// YOU CAN ADD YOUR OWN CODE TO THIS FILE AND USE THEM IN YOUR WORK.
// /////////////////////////////////////////////////////////////////////////////

import express from "express";

const app = express();
app.disable("x-powered-by");

const routes = express.Router();

/**
 * The following two lines are needed to allow converting request objects to JSON
 */
app.use(express.urlencoded());
app.use(express.json());

require("./player").default(routes);
require("./team").default(routes);

app.use("/api", routes);

export default app;
