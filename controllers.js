const BankModel = require("./model");

//controllers
const listBankController = (req, res) => {
  //list all banks
  const banks = BankModel.call();
  res.json({ data: banks });
};

const createBankController = (req, res) => {
  //create a bank
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const bank = new BankModel({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });

  bank.save();

  res.json({ message: "create successful", data: bank });
};

const updateBankController = (req, res) => {
  //updete a bank
  const { name, location, branch, phone, address, accountNumber } = req.body;
  const updatedBank = BankModel.update({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  res.json({ message: "update successful", data: updatedBank });
};

const deleteBankController = (req, res) => {
  //delete a bank
  const { name } = req.body;
  const deleteBank = BankModel.delete({ name });
  res.json({ message: "bank delete", data: deleteBank });
};

module.exports = {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
};
