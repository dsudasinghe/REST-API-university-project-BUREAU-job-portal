const Users = require("../model/userModel");

const authRecruiter = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.user.nid });

    if (user.role == 2 || user.role == 1) next();
    else
      return res.status(400).json({ msg: "Recruiter resources access denied" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authRecruiter;
