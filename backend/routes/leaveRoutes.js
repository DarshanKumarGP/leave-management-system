const express = require("express");

const Leave = require("../models/Leave");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/*
EMPLOYEE APPLY LEAVE
*/

router.post("/apply", authMiddleware, async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;

    const leave = new Leave({
      employee: req.user.id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    await leave.save();

    res.json({ message: "Leave applied successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/*
EMPLOYEE VIEW OWN LEAVES
*/

router.get("/my", authMiddleware, async (req, res) => {
  try {
    const leaves = await Leave.find({ employee: req.user.id });

    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/*
EMPLOYER VIEW ALL LEAVES
*/

router.get("/all", authMiddleware, async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee", "name email");

    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/*
APPROVE / REJECT LEAVE
*/

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(leave);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;