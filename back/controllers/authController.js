const Users = require("../models/authModel");
bodyParser = require("body-parser");
const { promisify } = require("util"); // yra jau toks, siųstis nereikia
const jwt = require("jsonwebtoken");

// Get all users
  exports.getAllUsers = async (req, res) => {
    try {
      const user = await Users.find();
      res.status(200).json({
        status: "success",
        results: user.length,
        data: {
          Users: user,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.updateUser = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
      const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: false,
      });
  
      res.status(200).json({
        status: "success",
        data: {
          Users: user,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

    exports.deleteUserById = async (req, res) => {
      console.log(req.params.id)
      try {
        const users = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json({
          status: "success",
          data: users,
        });
      } catch (err) {
        res.status(404).json({
          status: "fail",
          message: err,
        });
      }
    };

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


exports.createUser = async (req, res) => {
  try {
    const newUser = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id }, "labas", {
      expiresIn: "90d",
    });

    console.log("Signup tokenas");
    console.log(token);

    res.status(200).json({
      status: "success",
      token: token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};




exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Ar yra vartotojo vardas ir slaptažodis
  if (!email || !password) {
    return res.status(404).json({
      status: "fail",
      message: "Neįvestas prisijungimo vardas arba slaptažodis.",
    });
  }

  // 2) Randame vartotoja ir patikrinsime ar tinka passwordas
  const user = await Users.findOne({ email }).select("+password");

  console.log(user);


  const token = jwt.sign({ id: user._id }, "labas", {
    expiresIn: "90d",
  });

  console.log("Login tokenas");
  console.log(token);

  res.status(200).json({
    status: "success",
    token: token,
  });
};



exports.protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, "labas");
  console.log(decoded);

  // 3) Check if user still exists
  const currentUser = await Users.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token does no longer exist.",
    });
  }
  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};