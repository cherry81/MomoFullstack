require("dotenv").config({ path: "./.env" });
const app = require("./app");
const connectDB = require("./db/index");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("failed to connect to database", error);
  });
