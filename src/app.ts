import express from "express";
import bodyParser from "body-parser";
import connection from "./db/config";
import todoRoutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", todoRoutes);

connection
  .sync()
  .then(() => {
    console.log("Databse synced");
  })
  .catch((error: Error) => {
    console.log(error.message);
  });

app.listen(3000, () => {
  console.log("Server is running");
});
