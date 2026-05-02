const express = require("express");

const router = express.Router();

const {
    scheduleTasks
} = require(
    "../controllers/schedulerController"
);

router.get(
    "/schedule",
    scheduleTasks
);

module.exports = router;