const { populate } = require("./accountModel");
const BankModel = require("./model");

//controllers
const listBankController = (req, res) => {
  //list all banks
  const { id } = req.params;

  if (id) {
    BankModel.find({ _id: id })
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  } else {
    BankModel.find()
      .then((banks) => {
        res.json({ data: banks });
      })
      .catch((err) => console.log(err));
  }
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

  bank
    .save()
    .then((result) => {
      res.json({ message: "create successful", data: result });
    })
    .catch((error) => console.log(error));
};

const updateBankController = (req, res) => {
  //updete a bank
  const { name, location, branch, phone, address, accountNumber } = req.body;

  BankModel.findById(id)
    .then((bank) => {
      if (bank) {
        bank.name = name;
        bank.location = location;
        bank.branch = branch;
        bank.phone = phone;
        bank.address = address;
        bank.accountNumber = accountNumber;

        bank.save();
        res.json({ message: "update successful", data: bank });
      }
      res.json({ message: "Document cannot be found" });
    })
    .catch((err) => console.log(err));

  // const updatedBank = BankModel.update({
  //   name,
  //   location,
  //   branch,
  //   phone,
  //   address,
  //   accountNumber,
  // });
  // res.json({ message: "update successful", data: updatedBank });
};

const deleteBankController = (req, res) => {
  //delete a bank
  const { id } = req.body;
  BankModel.findByIdAndRemove(id).then((deleteBank) => {
    if (deleteBank) {

      AccountModel.deleteMany({bankId: deleteBank._id}).then( result => {
        res.json({ message: "bank deleted", data: deleteBank });

      }).catch(err => console.log(err));
      return;
    }
  });
  res.json({ message: "bank not found" });
};

const createAccountController = (req, res) => {
  const { name, number, accountType, bankId } = req.body;

  const account = new AccountModel({ name, number, accountType, bankId });
};

account.save().then((result) => {
  if (result) res.json({ message: "account created", data: result });
  else res.json({ message: "Failed to create account" });
});

const listAccountController = (req, res) => {
  AccountModel.find()
  populate("bankId", "name location branch")
  .then(accounts => {
    res.json({data: accounts});
  }).catch(err => console.log(err));
}
module.exports = {
  listBankController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  listAccountController, 
};
