const express = require("express");
const bodyParser = require("body-parser");
const { connectDatabase, User } = require("./Database");
const path = require("path");
const passport = require("passport");
const { initializePassport, isAuthenticated } = require("./passportConfig");
const expressSessions = require("express-session");
const cors = require("cors");
connectDatabase();

initializePassport(passport);

const app = express();

// Middilewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  expressSessions({ secret: "secret", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// API's

app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      return res.status(400).send("Username already exists");
    }

    const newUser = await new User(req.body);

    await newUser.save();
    res.json({
      newUser,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    user: req.user,
  });
});
app.get("/profile", isAuthenticated, (req, res) => {
  res.send(req.user);
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("logged Out");
});

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
