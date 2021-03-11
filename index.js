//import express, body-paerser
const express = require("express");
const bodyParser = require("body-parser");
const {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  listAccountController,
} = require("./controllers");
const mongoose = require("mongoose");

//create express server instance
const server = express();

//middleware
server.use(bodyParser.json());

//routes
//View banks - get method
server.get("/bank/:id?", listBankController);
//create a bank - post method
server.post("/bank", createBankController);
//update bank - put method
server.put("/bank", updateBankController);
//delete bank - delete method
server.delete("/bank", deleteBankController);

server.post("/account", createAccountController);

server.get("/accounts", listAccountController);



//connect to database and start server
mongoose
  .connect(
    "mongodb+srv://TbaseClient:RFtKlOu4k9Fl68Mz@cluster0.ctygs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then((result) => {
    server.listen(3000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));