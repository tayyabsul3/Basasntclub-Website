const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://MuhammadTayyab:hXeg3v1P3m2vngbi@cluster0.pine65s.mongodb.net/BasantClub?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

exports.User = mongoose.model("User", userSchema);
