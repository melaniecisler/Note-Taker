const express = require('express');

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, () => console.log("Server is running on " + PORT));
