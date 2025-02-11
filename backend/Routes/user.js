const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../Models/User"); // Adjust the path

// Function to send OTP
const sendOTP = async (email, otp) => {
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password"
        }
    });

    let mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}`
    };

    await transporter.sendMail(mailOptions);
};

// Route to add user
router.post("/add", async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });
        
        user = new User({ email });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Route for login with OTP
router.post("/login", async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        await user.save();

        await sendOTP(email, otp);
        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Route to fetch a particular user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
module.exports = User;
