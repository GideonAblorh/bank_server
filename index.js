//import express, body-paerser
const express = require("express");
const bodyParser = require("body-parser");
const {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
} = require("./controllers");

//create express server instance
const server = express();

//middleware
server.use(bodyParser.json());

//routes
//View banks - get method
server.get("/bank", listBankController);

//create a bank - post method
server.post("/bank", createBankController);

//update bank - put method
server.put("/bank", updateBankController);

//delete bank - delete method
server.delete("/bank", deleteBankController);

//start server
server.listen(3000, () => console.log("server is ready"));
