const User = require('../MODEL/UserModel');
const { generateToken } = require('../utils/jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.findOne({ email });
  
        if (!user) {
            const newUser = new User(req.body);
            await newUser.save();

            res.json({
                _id: newUser._id,
                name: newUser.username,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: generateToken(newUser._id),
            });
        } else {
            res.status(400); 
            throw new Error("Email already in use!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please sign up.' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }
        
        res.status(200).json({ message: 'Successfully logged in.',token:generateToken(user._id),user:{ id: user.id}});
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "Internal error" });
    }
}

const getuser = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming req.user is populated by your protect middleware
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "Internal error" });
    }
};


const updateuser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = { ...req.body };
        if (updatedData.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(updatedData.password, salt);
            updatedData.password = hashedPassword;
        }
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }
        console.log("User data updated successfully");
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "Internal error" });
    }
}

const deleteuser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }
        console.log("User data deleted successfully");
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "Internal error" });
    }
}



module.exports = { register, login, getuser, updateuser, deleteuser};
