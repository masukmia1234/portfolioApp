const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//item model
const Item = require("../../models/Items");

//@route GET api/items
//@desc GEt All Items
//@access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    category: req.body.category,
    thumb: req.body.thumb,
    img: req.body.img,
    youTube: req.body.youTube,
    software: req.body.software,
    details: req.body.details,
    gitHub: req.body.gitHub,
    created: req.body.created
  });

  newItem.save().then(item => res.json(item));
});

//@route Delete api/items
//@desc Delete a post
//@access Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.remove().then(() => res.json({ deleted: true }));
    })
    .catch(err => res.status(404).json({ deleted: false }));
});

/*
  {
    name: "Recipe App",
    category: "applications",
    thumb:
      "https://mechanized-aesthetics.net/MA-2015/img/work/recipeWebApp.jpg",
    img: "https://mechanized-aesthetics.net/MA-2015/img/work/recipeWebApp.jpg",
    youTube: "1Lw8QvlMfBY",
    software: ["React.js", "Node.js", "MongoDB", "Bootstrap", "CSS", "Oauth"],
    details:
      "Add, share and leave comment for your favorite recipes. All you need is a Gmail account.",
    gitHub: "https://github.com/aaronrs2002/recipe-app/tree/master/recipe-app",
    created: "2019"
  }
*/

// this is our update method
/* this method overwrites existing data in our database*/
router.put("/updateData/", (req, res) => {
  //const id = req.params.id;
  const { id, update } = req.body;
  Item.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json(data);
  });
});

module.exports = router;
