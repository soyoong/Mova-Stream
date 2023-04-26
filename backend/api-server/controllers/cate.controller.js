const Cate = require("../models/CateMovie");

// Create
exports.createNew = async (req, res) => {
  if (req.user.isAdmin) {
    if (req.body) {
      const genre = new Cate(req.body);
      await genre
        .save()
        .then((item) => {
          return res.status(200).json({
            success: true,
            item: item,
            errorCode: null,
            errorMessage: null,
          });
        })
        .catch((err) => {
          return res.status(401).json({
            success: false,
            errorCode: `${err.code}`,
            errorMessage: err.message,
          });
        });
    } else {
      return res.status(402).json({
        success: false,
        errorCode: "402",
        errorMessage: "This field is empty!",
      });
    }
  } else {
    return res.send("You are not allowed!");
  }
};

// Update
exports.updateById = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedGenre = await Cate.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        item: updatedGenre,
        errorCode: null,
        errorMessage: null,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorCode: err.code,
        errorMessage: err.message,
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      message: "You are not allowed!",
    });
  }
};

// Get user by id
exports.getById = async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      const genre = await Cate.findById(id);
      if (genre) {
        return res.status(200).json({
          success: true,
          item: genre,
          errorCode: null,
          errorMessage: null,
        });
      } else {
        return res.status(404).json({
          success: false,
          errorCode: "404",
          errorMessage: "Cannot find genre!",
        });
      }
    } else {
      return res.status(402).json({
        success: false,
        errorCode: "402",
        errorMessage: "This field is empty!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      errorCode: err.code,
      errorMessage: err.message,
    });
  }
};

// Get all users
exports.getAll = async (req, res) => {
  try {
    const genres = await Cate.find({});
    return res.status(200).json({
      success: true,
      items: genres,
      total: genres.length,
      errorCode: null,
      errorMessage: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      items: null,
      total: null,
      errorCode: err.code,
      errorMessage: err.message,
    });
  }
};

// Delete
exports.delete = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Cate.findByIdAndDelete(req.params.id)
        .then((item) => {
          return res.status(200).json({
            success: true,
            errorCode: null,
            errorMessage: `${item.name} has been deleted!`,
          });
        })
        .catch((err) => {
          return res.status(404).json({
            success: false,
            errorCode: err.code,
            errorMessage: err.message,
          });
        });
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorCode: err.code,
        errorMessage: err.message,
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      errorCode: "403",
      errorMessage: "You are not allowed!",
    });
  }
};
