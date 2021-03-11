
let banksDb = require("./database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BankSchema = new Schema({
  name: String,
  location: String,
  branch: String,
  address: String,
  accountNumber: String,
  accounts: [
    {
      accountId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: "Account"}
    }
  ]
});

const BankModel = mongoose.model("Bank", BankSchema);

module.exports = BankModel;

// class BankModel {
//   constructor({ name, location, branch, phone, address, accountNumber }) {
//     this.name = name;
//     this.location = location;
//     this.branch = branch;
//     this.phone = phone;
//     this.address = address;
//     this.accountNumber = accountNumber;
//   }

//   save() {
//     banksDb.push(this);
//     return this;
//   }

//   static all() {
//     return banksDb;
//   }
//   static update(updateInfo = {}) {
//     banksDb = banksDb.map((bank) => {
//       if (bank.name === updateInfo.name) {
//         return { ...bank, ...updateInfo };
//       }
//       return bank;
//     });
//   }

//   static delete({ name }) {
//     let deletedBank = null;
//     banksDb = banksDb.filter((bank) => {
//       if (bank.name !== name) {
//         return true;
//       }
//       deletedBank = bank;
//       return false;
//     });
//   }
// }

// module.exports = BankModel;