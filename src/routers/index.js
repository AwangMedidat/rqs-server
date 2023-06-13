const router = require("express").Router();
const role = require("./roleRouter");
const section = require("./sectionRouter");
const auth = require("./authRoutes");

router.use("/role", role);
router.use("/section", section);
router.use("/auth", auth);

module.exports = router;
