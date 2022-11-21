const mongoose = require("mongoose")

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@pls-dp-04.srrnaky.mongodb.net/test');
    console.log('Connect successfuly!!!');
  }
  catch(error) {
    console.log('Connect failure!!!');
  }
}
module.exports = { connect }