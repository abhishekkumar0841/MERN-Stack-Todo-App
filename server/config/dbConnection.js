const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((c) => {
      console.log(`Database connected successfully with ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(`Error while database connection ${e}`);
      process.exit(1)
    });
};

module.exports = dbConnection;
