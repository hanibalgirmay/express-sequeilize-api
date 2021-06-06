import express from "express";
import cors from "cors";
import db from "./app/models";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

let corsOption = {
  origin: "http://localhost:7001",
};

/**
 * if we want to drop tables and re-sync use can use {force:true}
 */
// db.sequelize.sync({force:true}).then(() => {console.log('Drop and re-sync db')});
db.sequelize.sync();

// Middleware
app.use(cors(corsOption));

// enable application/json
app.use(express.json());
// enable application/x-www-form
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on port ${port}`);
});
