const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
      const user = await User.findById(nid);
      if (user) return res.status(400).json({ msg: "This NID already exist." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must have at least 6 characters." });

      // used bcrypt to encrypt password
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new User({
        name,
        _id: nid,
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

  addRecruiter: async (req, res) => {
    try {
      const { name, nid, email, password, affiliation } = req.body;

      if (!name || !nid || !email || !password || !affiliation)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // validate NID
      if (!validateNid(nid))
        return res.status(400).json({ msg: "Invalid NID." });

      //validate email
      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid email." });

      // check if nid exsist
      const user = await User.findById(nid);
      if (user) return res.status(400).json({ msg: "This NID already exist." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must have at least 6 characters." });

      // used bcrypt to encrypt password
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new User({
        name,
        _id: nid,
        email,
        role: 2,
        password: passwordHash,
        profession: "Recruiter",
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
      const user = await User.findById(nid);
      if (!user)
        return res.status(400).json({ msg: "This NID doesn't exist." });

      // decrypt and match password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Password incorrect." });

      const refresh_token = createRefreshToken({ nid: user._id });
      //console.log(refresh_token)
      // res.cookie("refreshtoken", refresh_token, {
      //   httpOnly: true,
      //   path: "/user/refresh_token",
      //   credentials: 'include',
      //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
      // });
      console.log(refresh_token);
      res.json({ msg: "Login success!", refresh_token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  /*
  getAccessToken: (req, res) => {
    console.log(req.cookies)

    try {
      const rf_token = req.cookies.refreshtoken;
      console.log(rf_token)
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please login now!" });

        const access_token = createAccessToken({ nid: user.nid });
        res.json({ access_token });
        //console.log(user.nid);
      });
    } catch (err) {
      return err.status(500).json({ msg: err.message });
    }
  },*/

  /* logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },*/

  getAllUserInfo: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json({ users });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.nid }).select(
        "-password"
      );
      if (!user) return res.status(400).json({ msg: "User not found!" });
      res.json(user);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { qualifications, latitude, longitude } = req.body;
      let path = "";
      if (req.files) {
        req.files.forEach(function (files, index, arr) {
          path = path + files.path + ",";
        });
        path = path.substring(0, path.lastIndexOf(","));
      }

      const certificates = path;

      console.log(req.body);
      await User.findOneAndUpdate(
        { _id: req.user.nid },
        {
          qualifications,
          latitude,
          longitude,
          certificates,
        }
      );
      res.json({ msg: "User successfully updated!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.nid);
      if (!user) return res.status(400).json({ msg: "Invalid operation" });
      res.json({ msg: "Delete succussful!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  qualification: async (req, res) => {
    try {
      const user = await User.find({
        qualifications: req.params.qualification,
      }).select("-password -role");
      if (!user) return res.status(400).json({ msg: "No users found!" });
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getContact: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.nid }).select(
        "email name"
      );
      if (!user) return res.status(400).json({ msg: "Contact not found!" });
      res.json(user);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  verifyUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.nid },
        {
          verified: true,
        }
      );
      if (!user) return res.status(400).json({ msg: "verification failed!" });
      res.json({ msg: "User successfully verified!" });
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

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = userController;
