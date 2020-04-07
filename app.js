const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

// Set the gloable key to the template I use
// app.engine(
//   "handlebars",
//   expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" })
// );
app.set("view engine", "ejs");

// Set the directory where to find the views
// view folder is the defualt but I made it explicit
// app.set('view', 'views')

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

app.listen(3000);