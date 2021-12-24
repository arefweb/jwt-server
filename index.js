
const app = require("./app");

const port = 5000 || process.env.PORT 

app.listen(port, (err) => {
  console.log("server on: localhost:5000");
  console.log(err);
});