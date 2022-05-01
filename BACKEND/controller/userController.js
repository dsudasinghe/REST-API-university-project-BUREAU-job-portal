const User = require("../model/userModel");
const bcrypt = require("bcrypt");

userController = {
  register: async (req, res) => {
    try {
      const {
        name,
        nid,
        email,
        password,
        age,
        address,
        latitude,
        longitude,
        profession,
        affiliation,
      } = req.body;

      if (
        !name ||
        !nid ||
        !email ||
        !password ||
        !age ||
        !address ||
        !latitude ||
        !longitude ||
        !profession ||
        !affiliation
      )
        return res.status(400).json({ msg: "Please fill in all fields." });

      // validate NID
      if (!validateNid(nid))
        return res.status(400).json({ msg: "Invalid NID." });

      //validate email
      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid email." });

      // check if nid exsist
      const user = await User.findOne({ nid });
      if (user) return res.status(400).json({ msg: "This NID already exist." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must have at least 6 characters." });

      // used bcrypt to encrypt password
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new User({
        name,
        nid,
        email,
        password: passwordHash,
        age,
        address,
        latitude,
        longitude,
        profession,
        affiliation,
      });

      await newUser.save();

      res.json({ msg: "Register success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { nid, password } = req.body;
      const user = await User.findOne({ nid });
      if (!user)
        return res.status(400).json({ msg: "This NID doesn'n exist." });

      // decrypt and match password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Password incorrect." });

      res.json({ msg: "Login success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

//------------------------------------functions----------------------------------------->
//email validation
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//nid validation
function validateNid(nid) {
  var re =
    /^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/;
  return re.test(String(nid).toLowerCase());
}

module.exports = userController;
